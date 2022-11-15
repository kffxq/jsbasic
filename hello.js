const cowsay = require("cowsay");
const oneLinerJoke = require('one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(
    cowsay.say({
    text : getRandomJoke.body,
    e : "0 0",
    T : "👅",
  })
);









