import nodemailer from 'nodemailer';
import config from './config';

const transporter =  nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers:'SSLv3'
  },
  auth: {
    user: config.email,
    pass: config.password
  }
});

const send = ({ email, name, text }) => {

  const message = {
    from: 'onesocialmama@outlook.com',
    to: 'onesocialmama@outlook.com',
    subject: `New message from ${name} on onesocialmama.com`,
    text
  };

  console.log(message);

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            resolve(info);
        }

    });
  });
};

export default send;
