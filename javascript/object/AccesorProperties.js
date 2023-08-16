let creditCard = {
  _name: "Rajib",
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

console.log(creditCard.name);

creditCard.name = "Azizul";
console.log(creditCard.name);
