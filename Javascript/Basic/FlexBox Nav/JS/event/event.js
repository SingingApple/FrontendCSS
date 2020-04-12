// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   alert("you clicked");
// });
// const ul = document.querySelector("ul");

// const button = document.querySelector("button");
// button.addEventListener("click", e => {
//   const li = document.createElement("li");
//   li.textContent = "Something new";
//   ul.prepend(li);
// });
// // const list = document.querySelectorAll("li");
// // list.forEach(item => {
// //   item.addEventListener("click", e => {
// //     console.log("event in LI");
// //     e.stopPropagation();
// //     e.target.remove();
// //   });
// // });
// ul.addEventListener("click", e => {
//   if (e.target.tagName == "LI") {
//     e.target.remove();
//   }
// });
const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  alert("copyrright content");
});
const box = document.querySelector(".box");

box.addEventListener("mousemove", e => {
  console.log(e.offsetX, e.offsetY);
  box.textContent = "x pos " + e.offsetX;
});
document.addEventListener("wheel", e => {
  console.log(e.pageX, e.pageY);
});
