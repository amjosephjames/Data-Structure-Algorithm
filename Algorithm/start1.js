// class Lucia {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   yourName() {
//     console.log(`welcome ${firstName} ${lastName}`);
//   }
// }

// const newCharacter = new Lucia("Peter", "Oti");

// newCharacter.yourName();

// // This is the day that the Lord has made

const model = (n) => {
  const xx = [];
  const x = n.split(" ");
  console.log(x);
  for (let s of x) {
    xx.push(s.length);
  }

  console.log("This is: ", xx);
  console.log(Math.min(...xx));
};

const models = (n) => {
  const e = n.replace(/[aeiou]/gi, "");
  console.log(e);
};

const model3 = (n) => {
  const x = n.toString();

  //   console.log(n);

  const xx = x.split("").reverse().join("");
  const xxx = parseInt(xx);

  console.log(xxx);
};

// const model4 = (n) => {
//     const conn = "abcdefghijklmnopqrstuvwxyz"
    
// };

// model4("The sunset sets at twelve o' clock.");
