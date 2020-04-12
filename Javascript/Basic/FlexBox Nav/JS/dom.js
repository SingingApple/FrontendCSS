// const para = document.querySelector("div.error");
// console.log(para);

// const paras = document.querySelectorAll("p");
// paras.forEach(para => {
//   console.log(para);
// });
// get an element by ID
// const title = document.getElementById("page-title");
// console.log(title);

// const errors = document.getElementsByClassName("error");

// const paras = document.getElementsByTagName("p");
// console.log(paras[1]);
// const para = document.querySelector("p");
// // para.innerHTML += "I m awesome";
// const paras = document.querySelectorAll("p");
// // paras.forEach(para => {
// //   para.innerText += " new text";
// // });
// const content = document.querySelector(".content");
// //
// const people = ["mario", "luigi", "yoshi"];
// people.forEach(person => {
//   content.innerHTML += "<p> " + person + "</p>";
// });
// const link = document.querySelector("a");
// link.setAttribute("href", "https://www.facebook.com");
// link.innerText = "facebook";
// const divison = document.querySelector(".content");
// console.log(divison.getAttribute("class"));
// divison.setAttribute("style", "color:green");
// const title = document.querySelector(".hero");
// // title.setAttribute("style", "margin: 100px;");
// title.style.color = "orange";
// title.style.fontSize = "70px";
// const paras = document.querySelectorAll("p");
// paras.forEach(p => {
//   if (p.textContent.includes("error")) {
//     p.classList.add("error");
//   }
//   if (p.textContent.includes("success")) {
//     p.classList.add("success");
//   }
// });
const article = document.querySelector("article");
// Array.from(article.children).forEach(child => {
//   child.classList.add("error");
// });
const paras = document.querySelector("p");
console.log(paras.nextElementSibling.parentElement);
