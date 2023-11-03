const courses = {}

courses.english = prompt('Enter English Grade');
courses.french = prompt('Enter French Grade');
courses.mathematics = prompt('Enter Mathematics Grade');
courses.physics = prompt('Enter Physics Grade');
courses.chemistry = prompt('Enter Chemistry Grade');
courses.biology = prompt('Enter Biology Grade');
courses.workshop = prompt('Enter Workshop Grade');
courses.technicalDrawing = prompt('Enter Technical Drawing Grade');
courses.humanities = prompt('Enter Humanities Grade');

const courseUnits = {
    english: 2,
    french: 1,
    mathematics: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}

const gradePoints = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
}

const totalUnit = 21;

let englishUnit = courses.english;

if (courses.english === "A") {
    englishUnit = courseUnits.english * gradePoints.A;
}
else if (courses.english === "B") {
    englishUnit = courseUnits.english * gradePoints.B;
}
else if (courses.english === "C") {
    englishUnit = courseUnits.english * gradePoints.C;
}
else if (courses.english === "D") {
    englishUnit = courseUnits.english * gradePoints.D;
}
else if (courses.english === "E") {
    englishUnit = courseUnits.english * gradePoints.E;
}
else {
    englishUnit = courseUnits.english * gradePoints.F;
}


let frenchUnit = courses.french;

if (courses.french === "A") {
    frenchUnit = courseUnits.french * gradePoints.A;
}
else if (courses.french === "B") {
    frenchUnit = courseUnits.french * gradePoints.B;
}
else if (courses.french === "C") {
    frenchUnit = courseUnits.french * gradePoints.C;
}
else if (courses.french === "D") {
    frenchUnit = courseUnits.french * gradePoints.D;
}
else if (courses.french === "E") {
    frenchUnit = courseUnits.french * gradePoints.E;
}
else {
    frenchUnit = courseUnits.french * gradePoints.F;
}

let mathematicsUnit = courses.mathematics;

if(courses.english === "A") {
    mathematicsUnit = courseUnits.mathematics * gradePoints.A;
}
else if(courses.english === "B") {
    mathematicsUnit = courseUnits.mathematics * gradePoints.B;
}
else if(courses.english === "C") {
    mathematicsUnit = courseUnits.mathematics * gradePoints.C;
}
else if(courses.english === "D") {
    mathematicsUnit = courseUnits.mathematics * gradePoints.D;
}
else if(courses.english === "E") {
    mathematicsUnit = courseUnits.mathematics * gradePoints.E;
}
else {
    mathematicsUnit = courseUnits.mathematics * gradePoints.F;
}

let physicsUnit = courses.physics;

if(courses.physics === "A") {
    physicsUnit = courseUnits.physics * gradePoints.A;
}
else if(courses.physics === "B") {
    physicsUnit = courseUnits.physics * gradePoints.B;
}
else if(courses.physics === "C") {
    physicsUnit = courseUnits.physics * gradePoints.C;
}
else if(courses.physics === "D") {
    physicsUnit = courseUnits.physics * gradePoints.D;
}
else if(courses.physics === "E") {
    physicsUnit = courseUnits.physics * gradePoints.E;
}
else {
    physicsUnit = courseUnits.physics * gradePoints.F;
}

let chemistryUnit = courses.chemistry;

if(courses.chemistry === "A") {
    chemistryUnit = courseUnits.chemistry * gradePoints.A;
}
else if(courses.chemistry === "B") {
    chemistryUnit = courseUnits.chemistry * gradePoints.B;
}
else if(courses.chemistry === "C") {
    chemistryUnit = courseUnits.chemistry * gradePoints.C;
}
else if(courses.chemistry === "D") {
    chemistryUnit = courseUnits.chemistry * gradePoints.D;
}
else if(courses.chemistry === "E") {
    chemistryUnit = courseUnits.chemistry * gradePoints.E;
}
else {
    chemistryUnit = courseUnits.chemistry * gradePoints.F;
}

let biologyUnit = courses.biology;

if(courses.biology === "A") {
    biologyUnit = courseUnits.biology * gradePoints.A;
}
else if(courses.biology === "B") {
    biologyUnit = courseUnits.biology * gradePoints.B;
}
else if(courses.biology === "C") {
    biologyUnit = courseUnits.biology * gradePoints.C;
}
else if(courses.biology === "D") {
    biologyUnit = courseUnits.biology * gradePoints.D;
}
else if(courses.biology === "E") {
    biologyUnit = courseUnits.biology * gradePoints.E;
}
else {
    biologyUnit = courseUnits.biology * gradePoints.F;
}

let workshopUnit = courses.workshop;

if(courses.workshop === "A") {
    workshopUnit = courseUnits.workshop * gradePoints.A;
}
else if(courses.workshop === "B") {
    workshopUnit = courseUnits.workshop * gradePoints.B;
}
else if(courses.workshop === "C") {
    workshopUnit = courseUnits.workshop * gradePoints.C;
}
else if(courses.workshop === "D") {
    workshopUnit = courseUnits.workshop * gradePoints.D;
}
else if (courses.workshop === "E") {
    workshopUnit = courseUnits.workshop * gradePoints.E;
}
else {
    workshopUnit = courseUnits.workshop * gradePoints.F;
}

let technicalDrawingUnit = courses.technicalDrawing;

if(courses.technicalDrawing === "A") {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.A;
}
else if(courses.technicalDrawing === "B") {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.B;
}
else if(courses.technicalDrawing === "C") {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.C;
}
else if(courses.technicalDrawing === "D") {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.D;
}
else if(courses.technicalDrawing === "E") {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.E;
}
else {
    technicalDrawingUnit = courseUnits.technicalDrawing * gradePoints.F;
}

let humanitiesUnit = courses.humanities;

if(courses.humanities === "A") {
    humanitiesUnit = courseUnits.humanities * gradePoints.A;
}
else if(courses.humanities === "B") {
    humanitiesUnit = courseUnits.humanities * gradePoints.B;
}
else if(courses.humanities === "C") {
    humanitiesUnit = courseUnits.humanities * gradePoints.C;
}
else if(courses.humanities === "D") {
    humanitiesUnit = courseUnits.humanities * gradePoints.D;
}
else if(courses.humanities === "E") {
    humanitiesUnit = courseUnits.humanities * gradePoints.E;
}
else {
    humanitiesUnit = courseUnits.humanities * gradePoints.F;
}

let sumOfPoint = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

 let gpa = sumOfPoint / totalUnit;

 document.write(gpa);

