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

displayProperty.call(student1, 10, 15);
displayProperty.call(student2, 20, 25);
displayProperty.call();
