// localStorage.setItem("name", "Mario");
// localStorage.setItem("age", 50);

// // get data

// let name = localStorage.getItem("name");
// console.log(name);

// // updating item

// localStorage.setItem("name", "luigi");

// // deleting
// localStorage.removeItem("name");
// localStorage.clear();
const getData = async () => {
  const request = await fetch("todos.json");
  console.log(request);
  const data = await request.json();
  return data;
};

getData().then(data => {
  localStorage.setItem("data", JSON.stringify(data));
});
