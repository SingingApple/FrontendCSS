// const scores = [10, 20, 30, 40, 50];
// const filteredscores = scores.filter(score => {
//   return score < 20;
// });
// console.log(filteredscores);
// const users = [
//   { name: "Shaun", premium: true },
//   { name: "Peter", premium: false },
//   { name: "Mario", premium: true },
//   { name: "Luigi", premium: false }
// ];
// const premiumUsers = users.filter(user => {
//   return user.premium;
// });
// console.log(premiumUsers);
const prices = [10, 20, 30, 40, 50];
// const newPrices = prices.map(price => {
//   return price / 2;
// });
// console.log(newPrices);
const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 50 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 30 }
];
// const newProducts = products.map(product => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });
// console.log(newProducts);
// const total = products.reduce((acc, cur) => {
//   if (cur.name === "red shells") {
//     acc += cur.price;
//   }
//   return acc;
// }, 0);
// console.log(total);
// const firstHighScore = prices.find(price => {
//   return price > 30;
// });
// console.log(firstHighScore);
// console.log(prices.reverse());
// const newProd = products.sort((a, b) => {
//   return a.score - b.score;
// });
// console.log(newProd);
const filteredProducts = products
  .filter(product => {
    return product.price < 30;
  })
  .map(product => {
    console.log("this is" + product.name + "of pruce" + product.price);
  });
console.log(filteredProducts);
