import ReactDOMServer from "react-dom/server";

export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'testingapplication1234567@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: 'testingapplication1234567@gmail.com',
    to: 'testingapplication1234567@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: ReactDOMServer.renderToString(<div>{req.body.message}</div>)
   }

   transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  console.log(req.body)
  res.send('success')
}
