//"use strict";
/*
const express = require('express');
const config = require('./config');
const app = express();
app.listen(config.app.port);
console.log(config.app.name);
*/
//const switcher = document.querySelector(".submit-button");
/*
let recruiterInfo = [];

function addRecruiterInfo() {
  let textbox1 = document.getElementById("fname");
  let textbox2 = document.getElementById("lname");
  let textbox3 = document.getElementById("phone");
  let textbox4 = document.getElementById("email");

  recruiterInfo.push(textbox1.value);
  recruiterInfo.push(textbox2.value);
  recruiterInfo.push(textbox3.value);
  recruiterInfo.push(textbox4.value);

  console.log(recruiterInfo);
}
*/

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
