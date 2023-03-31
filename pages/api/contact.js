import ReactDOMServer from "react-dom/server";

export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.email,
    to: process.env.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: ReactDOMServer.renderToString(<div><p>Name:</p> {req.body.name} <p>Message:</p>{req.body.message}</div>)
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
