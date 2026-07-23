// Task 6: Hospital Patient System — Iterate Over Records

let patients = [
    { name: "Rahul", age: 25, disease: "Fever" },
    { name: "Priya", age: 40, disease: "Diabetes" },
    { name: "Arun", age: 18, disease: "Cold" },
    { name: "Meena", age: 60, disease: "Heart Problem" }
];

for (let i = 0; i < patients.length; i++) {
    console.log(patients[i]);
}

/*
Expected Output:
{ name: 'Rahul', age: 25, disease: 'Fever' }
{ name: 'Priya', age: 40, disease: 'Diabetes' }
{ name: 'Arun', age: 18, disease: 'Cold' }
{ name: 'Meena', age: 60, disease: 'Heart Problem' }
*/
