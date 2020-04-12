const double = (...nums) => {
  return nums.map((num) => num * 2);
};
const people = ["anurag", "mario"];
const newPeople = [...people, "reb"];
const obj1 = { name: "anurag", age: 18 };
const obj2 = { ...obj1, job: "no job" };
document.write(double(1, 2, 3, 4));
document.write(newPeople);
document.write(JSON.stringify(obj2));

//sets (to remove duplicate values)
const array = ["lol", "lol", "lmao"];
const newSet = new Set(array);
console.log(...newSet);
newSet.add(10).add(20);
newSet.delete(10);
console.log(newSet.has(20));
newSet.forEach((set) => console.log(set));
newSet.clear();
console.log(ages);
