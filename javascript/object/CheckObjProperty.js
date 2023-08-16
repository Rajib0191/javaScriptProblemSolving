const obj1 = {
  name: "Azizul", //[[put]]
};

// Check Properties exits in object
console.log("name" in obj1);
console.log("description" in obj1);
console.log("toString" in obj1); //It's give true but toString is not the obj property.
/**
 * For check property use (hasOwnProperty) it's convenient.
 */
console.log(obj1.hasOwnProperty("toString"));

console.log(obj1);
