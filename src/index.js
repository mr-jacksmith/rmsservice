const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const http = require("http");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs')

app.post("/contact", function (req, res) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "a.a.peshnin@gmail.com",
      pass: "ykgileysayblyzcp",
    },
  });

  const mailOptions = {
    from: `${req.body.name} <${req.body.email}>`,
    to: "a.a.peshnin@gmail.com",
    subject: "Website Inquiry",
    text: req.body.message,
  };
  // res.send(req.body.email + " " + req.body.message);

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent");
    }
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/alum", (req, res) => {
  res.render("alum");
});

app.get("/firefighting", (req, res) => {
  res.render("firefighting");
});

app.get("/contacts", (req, res) => {
  res.render("contacts");
});

app.get("/entrance-doors", (req, res) => {
  res.render("entrance-doors");
});

app.get("/interior-doors", (req, res) => {
  res.render("interior-doors");
});

app.get("/photogallery", (req, res) => {
  res.render("photogallery");
});

app.get("/pvch", (req, res) => {
  res.render("pvch");
});

app.get("/tech-doors", (req, res) => {
  res.render("tech-doors");
});

app.listen(3000, "localhost", function () {
  console.log("Server is running on port 3000");
});
