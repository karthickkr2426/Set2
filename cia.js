// ===============================
// Task 1: Welcome Message
// ===============================
console.log("Task 1: Hospital Patient System — Welcome Message");
console.log("Question: Print a welcome message for the Hospital Patient System.");

console.log("Welcome to the Hospital Patient System");


// ===============================
// Task 2: Declare and Update Variables
// ===============================
console.log("\nTask 2: Hospital Patient System — Declare and Update Variables");
console.log("Question: Declare variables to store the system name and total number of patients.");

let systemName = "Hospital Patient System";
let totalPatients = 50;

console.log("System Name:", systemName);
console.log("Total Patients:", totalPatients);


// ===============================
// Task 3: Identify Datatypes
// ===============================
console.log("\nTask 3: Hospital Patient System — Identify Datatypes");
console.log("Question: Declare Number, String, and Boolean variables and print their datatypes.");

let patientAge = 25;
let patientName = "Rahul";
let isAdmitted = true;

console.log("typeof patientAge:", typeof patientAge);
console.log("typeof patientName:", typeof patientName);
console.log("typeof isAdmitted:", typeof isAdmitted);


// ===============================
// Task 4: Perform a Calculation
// ===============================
console.log("\nTask 4: Hospital Patient System — Perform a Calculation");
console.log("Question: Calculate the age difference between two patients.");

let patient1Age = 45;
let patient2Age = 30;

let ageDifference = patient1Age - patient2Age;

console.log("Patient 1 Age:", patient1Age);
console.log("Patient 2 Age:", patient2Age);
console.log("Age Difference:", ageDifference);


// ===============================
// Task 5: Classify a Record
// ===============================
console.log("\nTask 5: Hospital Patient System — Classify a Record");
console.log("Question: Check whether a patient's age meets a specific condition using if-else.");

let age = 20;

if (age >= 18) {
    console.log("Patient is an Adult.");
} else {
    console.log("Patient is a Minor.");
}


// ===============================
// Task 6: Iterate Over Records
// ===============================
console.log("\nTask 6: Hospital Patient System — Iterate Over Records");
console.log("Question: Create an array of patients and print each patient's details.");

let patients = [
    { name: "Rahul", age: 25, disease: "Fever" },
    { name: "Priya", age: 40, disease: "Diabetes" },
    { name: "Arun", age: 18, disease: "Cold" },
    { name: "Meena", age: 60, disease: "Heart Problem" }
];

for (let i = 0; i < patients.length; i++) {
    console.log(
        "Name:", patients[i].name,
        "| Age:", patients[i].age,
        "| Disease:", patients[i].disease
    );
}


// ===============================
// Task 7: Skip or Stop Early
// ===============================
console.log("\nTask 7: Hospital Patient System — Skip or Stop Early");
console.log("Question: Skip patients whose age is less than 20 using continue.");

for (let i = 0; i < patients.length; i++) {
    if (patients[i].age < 20) {
        continue;
    }

    console.log(
        "Name:", patients[i].name,
        "| Age:", patients[i].age
    );
}


// ===============================
// Task 8: Add & Find
// ===============================
console.log("\nTask 8: Hospital Patient System — Add & Find");
console.log("Question: Add a patient using push() and find the oldest patient.");

patients.push({
    name: "Kiran",
    age: 70,
    disease: "Asthma"
});

console.log("After Adding New Patient:");
console.log(patients);

let oldestPatient = patients[0];

for (let i = 1; i < patients.length; i++) {
    if (patients[i].age > oldestPatient.age) {
        oldestPatient = patients[i];
    }
}

console.log("Oldest Patient:");
console.log(oldestPatient);


// ===============================
// Task 9: Remove & Sort
// ===============================
console.log("\nTask 9: Hospital Patient System — Remove & Sort");
console.log("Question: Remove a patient using pop() and sort patients by age.");

patients.pop();

console.log("After Removing Last Patient:");
console.log(patients);

patients.sort(function(a, b) {
    return a.age - b.age;
});

console.log("Patients Sorted by Age:");
console.log(patients);


// ===============================
// Task 10: Create and Print an Object
// ===============================
console.log("\nTask 10: Hospital Patient System — Create and Print an Object");
console.log("Question: Create a patient object with at least five properties and print each property.");

let patient = {
    id: 101,
    name: "Ramesh",
    age: 35,
    gender: "Male",
    disease: "Typhoid"
};

console.log("ID:", patient.id);
console.log("Name:", patient.name);
console.log("Age:", patient.age);
console.log("Gender:", patient.gender);
console.log("Disease:", patient.disease);