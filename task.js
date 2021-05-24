import readline from "readline";
import { accessSync, readFileSync, writeFileSync } from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion1 = async () => {
  return new Promise((fulfill, reject) => {
    rl.question("Enter your first name: ", (firstName) => {
      if (firstName === "") {
        reject("Please fill the first name");
        return;
      }
      fulfill(firstName);
    });
  });
};

const askQuestion2 = async () => {
  return new Promise((fulfill, reject) => {
    rl.question("Enter your last name: ", (lastName) => {
      if (lastName === "") {
        reject("Please fill the last name");
        return;
      }
      fulfill(lastName);
    });
  });
};

const askQuestion3 = async () => {
  return new Promise((fulfill, reject) => {
    rl.question("Enter your email: ", (email) => {
      if (email === "") {
        reject("Please fill the email");
        return;
      }
      fulfill(email);
    });
  });
};

const askQuestion4 = async () => {
  return new Promise((fulfill, reject) => {
    rl.question("Enter your age: ", (age) => {
      if (age === "") {
        reject("Please fill the age");
        return;
      }
      if (age <= 0) {
        reject("Please fill the age a number more than 0!");
        return;
      }
      if (isNaN(age)) {
        reject("Please fill the age only number more than 0!");
        return;
      }

      fulfill(parseInt(age));
    });
  });
};

const askQuestion5 = async () => {
  return new Promise((fulfill, reject) => {
    rl.question("Enter your address: ", (address) => {
      if (address === "") {
        reject("Please fill the address");
        return;
      }
      fulfill(address);
    });
  });
};

try {
  const filePath = `${process.cwd()}/task.json`;
  accessSync(filePath);
  let person = JSON.parse(readFileSync(filePath, "utf8"));

  person.firstName = await askQuestion1();
  person.lastName = await askQuestion2();
  person.email = await askQuestion3();
  person.age = await askQuestion4();
  person.address = await askQuestion5();

  writeFileSync(filePath, JSON.stringify(person));
  console.log(
    `Your data is: firstName: ${person.firstName}, lastName: ${person.lastName}, email: ${person.email}, age: ${person.age}, address ${person.address}`
  );
} catch (e) {
  console.log(`Whoops, something went wrong. The error is: ${e}`);
}

rl.close();
