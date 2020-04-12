const form = document.querySelector(".signup-form");
//const username = document.querySelector("#username");
const content = document.querySelector(".content");
const pattern = /^[a-zA-Z]{6,10}$/;
form.addEventListener("submit", e => {
  e.preventDefault();
  if (form.username.value.match(pattern)) {
    content.textContent = "valid";
  } else {
    content.textContent = "invalid";
  }
});

// live feedback
form.username.addEventListener("keyup", e => {
  //   console.log(e.target.value);
  if (e.target.value.match(pattern)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
