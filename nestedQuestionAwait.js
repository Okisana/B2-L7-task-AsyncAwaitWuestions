import readline from "readline";
import { accessSync, readFileSync, writeFileSync } from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Enter your first name: ", (firstName) => {
//   rl.question("Enter yout last name: ", (lastName) => {
//     rl.question("Enter your email: ", (email) => {
//       console.log(`Your data is:  ${firstName} ${lastName} ${email}`);
//     });
//   });
// });

// new Promise((fulfill, reject) => {
//   rl.question("Enter your first name: ", (firstName) => {
//     if (firstName === "") {
//       reject(`First name was empty`);
//       return;
//     }
//     fulfill(firstName);
//   });
// })
//   .then((output) => {
//     return new Promise((fulfill, reject) => {
//       rl.question("Enter your last name: ", (lastName) => {
//         if (lastName === "") {
//           reject(`Last name was empty`);
//           return;
//         }
//         fulfill(`${output} ${lastName}`);
//       });
//     });
//   })
//   .then((output) => {
//     return new Promise((fulfill, reject) => {
//       rl.question("Enter your email: ", (email) => {
//         if (email === "") {
//           reject(`email was empty`);
//           return;
//         }
//         fulfill(`${output} ${email}`);
//       });
//     });
//   })
//   .then((output) => {
//     console.log(`Your data is: ${output}`);
//   })
//   .catch((errorMessage) => {
//     console.log(`Sorry your data is invalid: ${errorMessage}`);
//   })
//   .finally(() => {
//     rl.close();
//   });

// const action1 = new Promise((fulfill) => {
//   setTimeout(() => {
//     console.log("yay1");
//     fulfill();
//   }, 2000);
// }).then(() => {
//   return new Promise(() => {
//     setTimeout(() => {
//       console.log("yay2");
//       fulfill();
//     }, 2000);
//   }).then(() => {
//     console.log("foo");
//   });

//ASYNC Promise

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

// console.log(await askQuestion1());

// await askQuestion1();
// await askQuestion2();
// await askQuestion3();

try {
  //take promise value
  const firstName = await askQuestion1();
  const lastName = await askQuestion2();
  const email = await askQuestion3();
  console.log(`Your data is: ${firstName}, ${lastName} and ${email}`);
} catch (e) {
  console.log(`Whoops, something went wrong. The error is: ${e}`);
}

rl.close();
