const object = {
  id: 1,
  value: 2,
  completed: true,
};

console.log(object);
const completed = false;
console.log({ ...object, completed });

const object1 = ["Jam", "Butter"];
console.log(object1);
console.log("Separator", [...object1, "anith"]);
