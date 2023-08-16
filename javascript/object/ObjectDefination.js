// There are two way define object

const obj1 = {
  name: "Azizul", //[[put]]
};
obj1.name = "Md Azizul Islam"; //[[set]]

// ==========Another Way

const obj2 = new Object();
obj2.name = "Rajib"; //[[put]]

obj2.name = "Rajib Islam"; //[[set]]

// Print Object Properties
console.log(obj1);
console.log(obj2);
