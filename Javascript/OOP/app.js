// const userOne = {
//   username: "mario",
//   email: "user@example.com",
//   login() {
//     console.log("user logged in");
//   },
//   logout() {
//     console.log("user logged out");
//   }
// };
// const userTwo = {
//   username: "luigi",
//   email: "user2@example.com",
//   login() {
//     console.log("user logged in");
//   },
//   logout() {
//     console.log("user logged out");
//   }
// };
// console.log(userTwo.username, userTwo.email);
// userTwo.login();

//Classes and Objects

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   logout() {
//     console.log(`${this.username} signed out`);
//   }
//   incScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, email, title) {
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(userName) {
//     users = users.filter(u => {
//       return !(u.username === userName);
//     });
//   }
// }
function User(user, email) {
  this.username = user;
  this.email = email;
}
User.prototype.login = function() {
  console.log(`${this.username} has logged in `);
  return this;
};

const userOne = new User("mario", "mario@example.com");
const userTwo = new User("luigi", "luigi@example.com");
console.log(userOne, userTwo);
const userThree = new Admin("shaun", "shaun@gmail.com");
userOne
  .login()
  .incScore()
  .logout();
console.log(userThree);

let users = [userOne, userTwo, userThree];
userThree.deleteUser(userTwo.username);
console.log(users);
userTwo.login();
