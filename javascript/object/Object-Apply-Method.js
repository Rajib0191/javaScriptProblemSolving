// Apply Method a Argument [Array] kore pass kore hbe.

let displayProperty = function (params, params2) {
  let id = this.id;
  let name = this.name;
  console.log(id, name, params, params2);
};

let student1 = {
  id: 1,
  name: "Azizul Islam",
};

let student2 = {
  id: 2,
  name: "Rajib",
};

displayProperty.apply(student1, [10, 15]);
displayProperty.apply(student2, [20, 25]);
