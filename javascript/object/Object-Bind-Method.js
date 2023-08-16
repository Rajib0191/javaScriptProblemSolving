// Bind Method return a function That we Assign a variable.

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

let stu1 = displayProperty.bind(student1);
stu1(10, 15);
let stu2 = displayProperty.bind(student2, 20, 25);
stu2();
