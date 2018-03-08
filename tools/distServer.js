import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import mailer from './mailer';
import bodyParser from 'body-parser';

/*eslint-disable no-console */

const port = process.env.PORT || 58000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });


function ignoreFavicon(req, res, next) {
  if (req.originalUrl.indexOf('/favicon')>-1) {
    res.status(204).json({nope: true});
  } else {
    next();
  }
}

app.use(ignoreFavicon);

app.post('/send-contact', urlencodedParser, (req, res) => {

  if (!req.body) return res.sendStatus(400);
  else {
    for(let form in req.body){
      let data = JSON.parse(form);
      mailer({ email: data.email, name: data.name, text: data.message, website: data.website }).then(() => {
        console.log(`Sent the message "${data.message}" from <${data.name}> ${data.email}.`);
        //res.end('It worked!');
        res.sendStatus(200);
      }).catch((error) => {
        console.log(`Failed to send the message "${data.message}" from <${data.name}> ${data.email} with the error ${error && error.message}`);
        res.sendStatus(400);
        //res.end('It failed');
      });

    }
  }

});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
