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

  console.log(process.env.email)


  const mailData = {
    from: process.env.email,
    to: process.env.email,
    subject: `Message From ${req.body.name} -- Contact`,
    text: req.body.message,
    html: ReactDOMServer.renderToString(<div><strong><p>Name:</p></strong>{req.body.name}<strong><p>Email:</p></strong>{req.body.email}<strong><p>Number:</p></strong>{req.body.number}<strong><p>Message:</p></strong>{req.body.message}</div>)
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
