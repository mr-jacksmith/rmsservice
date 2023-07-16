const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const http = require("http");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.post("/contact", function (req, res) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "a.a.peshnin@gmail.com",
      pass: "ykgileysayblyzcp",
    },
  });

  const mailOptions = {
    // from: `${req.body.name} <${req.body.email}>`,
    to: "mosunov_89@mail.ru",
    // to: "a.a.peshnin@gmail.com",
    subject: "ПЕРЕЗВОН!!!",
    text: `На сайт https://rmskirov.ru поступила заявка от ${req.body.name} с телефонным номером: ${req.body.phone}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.render("error");
    } else {
      console.log("Email sent: " + info.response);
      res.render("successful");
    }
  });
});

app.post("/sendemail", function (req, res) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "a.a.peshnin@gmail.com",
      pass: "ykgileysayblyzcp",
    },
  });

  const mailOptions = {
    // from: `${req.body.name} <${req.body.email}>`,
    to: "mosunov_89@mail.ru",
    // to: "a.a.peshnin@gmail.com",
    subject: "СКИДКА 10%!!!",
    text: `На сайт https://rmskirov.ru поступила заявка от ${req.body.email} с просьбой отправить коммерческое предложение и СКИДКУ 10% на ВСЕ УСЛУГИ!`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.render("error");
    } else {
      console.log("Email sent: " + info.response);
      res.render("successful");
    }
  });
});

app.get("/gallery-img", (req, res) => {
  const imagesDirectory = path.join(__dirname, "public/img/photogallery");
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      res.send("error");
    } else {
      res.send(files);
    }
  });
});

app.get("/interior-img", (req, res) => {
  const imagesDirectory = path.join(__dirname, "public/img/doors/interior");
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      res.send("error");
    } else {
      res.send(files.filter((el) => el.startsWith("model")));
    }
  });
});

app.get("/interior-json", (req, res) => {
  const imagesDirectory = path.join(__dirname, "public/img/doors/interior/_models.txt");
  let interiorJson = fs.readFileSync(imagesDirectory, "utf8");
  res.send(interiorJson)
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

app.get("/error", (req, res) => {
  res.render("error-404");
});

app.get("/successful", (req, res) => {
  res.render("error-404");
});

app.get("/*", (req, res) => {
  res.render("error-404");
});

app.listen(3000, "rmskirov.ru", function () {
  console.log("Server is running on port 3000");
});
