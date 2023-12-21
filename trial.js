const object = {
  id: 1,
  value: 2,
  completed: true,
};

console.log(object);
const completed = false;
console.log({ ...object, completed });
