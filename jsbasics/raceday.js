let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 18;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}. Race will start at 9:30am!`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. Race will start at 11:00am!`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber}. Race will start at 12:30pm!`);
} else {
  console.log('Please head to the registration desk!');
}