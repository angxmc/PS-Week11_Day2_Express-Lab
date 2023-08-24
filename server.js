const express = require("express");
const app = express();

const port = 3000;

const magicResponse = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];
const randomResponse =
  magicResponse[Math.floor(Math.random() * magicResponse.length)];

// #1
// greeting express application created ------------
app.get("/greeting/:name", (req, res) => {
  console.log(req.params);
  res.send("Hello, " + req.params.name);
});

//#2
// Tip calculator express application created -------------
app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tip = req.params.total * (req.params.tipPercentage / 100);
  res.send(`${tip}`);
});

//#3
//Magic 8 Ball express application created
app.get("/magic/:question", (req, res) => {
  res.send(`
  <h1>${req.params.question}</h1> 
  ${randomResponse}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
