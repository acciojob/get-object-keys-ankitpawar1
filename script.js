//your JS code here. If required.
var student = {
  name: "Ankit",
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

console.log(student.name);

const keys = student.getKeys();
console.log(keys);