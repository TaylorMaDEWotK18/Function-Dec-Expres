//Function Declaration 

console.log(getRandomNumber(1000));

function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

//Function Expression

const getRandomNumber = function(upper) {
  const randomNumber = Math.floor(Math.random() * upper ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(1000));