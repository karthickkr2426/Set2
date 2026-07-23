// Task 9: Hospital Patient System — Remove & Sort

let patients = [
    { name: "Rahul", age: 25 },
    { name: "Priya", age: 40 },
    { name: "Arun", age: 18 },
    { name: "Meena", age: 60 }
];

patients.pop();

patients.sort((a, b) => a.age - b.age);

console.log(patients);

/*
Expected Output:
[
  { name: 'Arun', age: 18 },
  { name: 'Rahul', age: 25 },
  { name: 'Priya', age: 40 }
]
*/
