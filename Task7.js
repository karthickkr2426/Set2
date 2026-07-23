// Task 7: Hospital Patient System — Skip or Stop Early

let patients = [
    { name: "Rahul", age: 25 },
    { name: "Priya", age: 40 },
    { name: "Arun", age: 18 },
    { name: "Meena", age: 60 }
];

for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 20) {
        continue;
    }

    console.log(patients[i].name, patients[i].age);
}

/*
Expected Output:
Rahul 25
Priya 40
Meena 60
*/
