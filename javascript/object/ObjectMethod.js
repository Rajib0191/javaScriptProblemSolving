let student = {
  id: 1,
  name: "Rajib",
  display: function () {
    console.log(student.id);
    console.log(student.name);
    // Another Way
    console.log(this.id);
    console.log(this.name);
  },
};
student.display();
// ===============================Reuse the function

let displayProperty = function () {
  console.log(this.id);
  console.log(this.name);
};

let student1 = {
  id: 1,
  name: "Azizul Islam",
  display: displayProperty,
};

let student2 = {
  id: 2,
  name: "Rajib",
  display: displayProperty,
};

student1.display();
student2.display();
