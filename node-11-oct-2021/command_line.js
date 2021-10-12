const process = require(`process`);
const arrayOfNUms = [1, 2, 3, 4, 5];

//!....................................1

const commandNum = process.argv[2];

let index = arrayOfNUms.findIndex((num) => {
    return num == commandNum;
});
if (index != -1) {
    console.log(arrayOfNUms[index], { index });
} else {
    console.log(`value not found`);
}

//!....................................2

const calcAction = process.argv[2];

if (calcAction == `sum`) {
  const sum = arrayOfNUms.reduce((total, num) => {
    return total + num;
  });
  console.log(sum);
} else if (calcAction == `avg`) {
  const sum = arrayOfNUms.reduce((total, num) => {
    return total + num;
  });
  console.log(sum / arrayOfNUms.length);
} else if (calcAction == `max`) {
  const max = arrayOfNUms.reduce((a, b) => {
    return Math.max(a, b);
  });
  console.log(max);
} else if (calcAction == `min`) {
  const max = arrayOfNUms.reduce((a, b) => {
    return Math.min(a, b);
  });
  console.log(max);
} else {
  console.error(`not a calc action`);
}

//!....................................3

const calcAction = process.argv[2];

switch (calcAction) {
  case `sum`:
    const sum = arrayOfNUms.reduce((total, num) => {
      return total + num;
    });
    console.log(sum);
    break;
  case `avg`:
    const sum = arrayOfNUms.reduce((total, num) => {
      return total + num;
    });
    console.log(sum / arrayOfNUms.length);
    break;
  case `max`:
    const max = arrayOfNUms.reduce((a, b) => {
      return Math.max(a, b);
    });
    console.log(max);
    break;
  case `min`:
    const max = arrayOfNUms.reduce((a, b) => {
      return Math.min(a, b);
    });
    console.log(max);
    break;

  default:
    console.error(`not a calc action`);

    break;
}
