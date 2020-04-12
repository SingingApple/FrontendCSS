/*var friends = new Array();
friends = ["Charlie", "Liz", "David", "Mattias"];
console.log(friends[0] + " " + friends[1]);
friends.push("anurag");
console.log(friends);
friends.unshift("Hello");
console.log(friends);
var newfriends = friends.slice(0, 2);
console.log(newfriends);
friends.shift();
console.log(friends.indexOf("lmao"));
var numbers = [22, 33, 11, 44, 55];

var friends_group = [
  ["Harry", "Ron", "Hagrid"],
  ["Mahesh", "Manish", "Mandi"]
];
console.log(friends_group[1][1]);
*/
/*
window.setInterval(function() {
  var todos = [];
  var input = prompt("What would you like to do");
  while (input !== "quit") {
    if (input == "list") {
      console.log(todos);
    } else if (input == "new") {
      var newtodo = prompt("Enter new todo");
      //todos.push(newtodo);
    }
    input = prompt("What would you like to do?");
  }
}, 500);
*/
/*
var dogs = new Array();
dogs = ["Lily", "Bruno", "Abhinav"];
dogs.shift();

console.log(dogs);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join("*"));
delete fruits[0];
console.log(fruits);
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits.concat(dogs));
*/
// var fruits = ["Apple", "Orange", "Banana"];
// for (i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// const calcArea = () => 3.14;
// const area = calcArea(2);
// console.log(area);
// const greet = () => {
//   console.log("Hey");
// };
// greet();
// const name = "Shaun";
// // function
// const greet = () => {
//   "hello";
// };
// let resultOne = greet();

// let people = ["mario", "luigi", "ryu", "shaun"];
// // people.forEach((index, person) => {
// //   console.log(index, person);
// // });
// let html = "";
// const ul = document.querySelector(".people");
// people.forEach((person, index) => {
//   html += '<li style="color:purple">' + index + "=" + person + "</li>";
// });
// ul.innerHTML = html;
// objects

// let user = {
//   name: "anurag",
//   age: 18,
//   email: "anurag@gmail.com",
//   location: "lucknow",
//   blogs: [
//     { title: "why mac", likes: 30 },
//     { title: "10 things", likes: 60 }
//   ],
//   login() {
//     console.log(this);
//   },
//   logBlogs() {
//     console.log("User has written these blogs");
//     this.blogs.forEach(blog => {
//       console.log(blog.title + "" + blog.likes);
//     });
//   }
// };
// // const key = "location";
// // user[key] = "kanpur";
// // console.log(typeof user.age);
// user.logBlogs();

// math object

console.log(Math.E);
const area = 7.7;
console.log(Math.trunc(area));
const random = Math.random();
console.log(Math.round(random) * 100);
