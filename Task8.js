// Task 8: Hospital Patient System — Add & Find

let patients = [
    { name: "Rahul", age: 25 },
    { name: "Priya", age: 40 },
    { name: "Arun", age: 18 },
    { name: "Meena", age: 60 }
];

patients.push({ name: "Kiran", age: 70 });

let oldest = patients[0];

for (let i = 1; i < patients.length; i++) {
    if (patients[i].age > oldest.age) {
        oldest = patients[i];
    }
}

console.log(oldest);

/*
Expected Output:
{ name: 'Kiran', age: 70 }
*/
