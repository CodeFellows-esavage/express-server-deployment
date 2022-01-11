'use strict';

const express = require('express');

// executing express express() is a singleton pattern that returns an object that can be modified.
const app = express();

const messages = [];
class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}

//requires 2 things, route (string), Callback function (Request Response)
app.get('/message', (request, response) => {
  console.log(`Someone sent a request!: ${request.method}`);

  response.send(messages);
});

function createMessage(req, res, next) {
  const messageText = req.query.text;
  const authorName = req.query.author;

  console.log('first message created');


  if (!messageText || !authorName) {
    next('No text or author');
  } else {
    const message = new Message(messageText, authorName);

    req.message = message;
    next();
  }
}

function saveMessage(req, res, next) {
  console.log('we can see any data added to the request', req.message);
  let message = req.message;
  messages.push(message);
  next();
}


// POST: http://localhost3000/message?text=somestring&author=somename
app.post('/message', createMessage, saveMessage, (request, response, next) => {
  response.send(messages);
});


app.use(function (err, request, response, next) {
  response.send('error handler hit!');
});

app.use(function (request, response) {
  response.status(404).send('Nothing Found!');
});

module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log(`App is running on : ${port}`);
    });
  },
  app,
};