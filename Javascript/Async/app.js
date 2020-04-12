// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest();
//   request.open("GET", resource);
//   request.addEventListener("readystatechange", () => {
//     //console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch data", undefined);
//     }
//   });

//   request.open("GET", "todos.json");
//   request.send();
// };
// console.log(1);
// console.log(2);
// getTodos("todos.json", (err, data) => {
//   console.log(data);
// });

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something

//     resolve("some data");
//     reject("some error ");
//   });
// };
// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   err => {
//     console.log(err);
//   }
// );
// getTodos = resource => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("some error occured");
//       }
//     });
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos.json")
//   .then(data => {
//     console.log(data);
//     return getTodos("todos2.json");
//   })
//   .then(data => {
//     console.log("second resolved", data);
//   })
//   .catch(err => {
//     console.log("promise rejected");
//   });

// fetch("todos.json") //retunrs a promise
//   .then(data => {
//     console.log(typeof data);
//     return data.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

const getTodos = async () => {
  const response = await fetch("ttodos.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then(ag => {
    console.log(ag);
  })
  .catch(err => {
    console.log(err.messsage);
  });

console.log(test);
