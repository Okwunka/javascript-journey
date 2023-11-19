const courses = {}

courses.english = fetchUserGrade("English");
courses.french = fetchUserGrade("French");
courses.mathematics = fetchUserGrade("Mathematics");
courses.physics = fetchUserGrade("Physic");
courses.chemistry = fetchUserGrade("Chemistry");
courses.biology = fetchUserGrade("Biology");
courses.workshop = fetchUserGrade("Workshop");
courses.technicalDrawing = fetchUserGrade("Technical Drawing");
courses.humanities = fetchUserGrade("Humanities");

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
const englishUnit = computeGradeScore(courses.english, courseUnits.english);
const frenchUnit = computeGradeScore(courses.french, courseUnits.french);
const mathematicsUnit = computeGradeScore(courses.mathematics, courseUnits.mathematics);
const physicsUnit = computeGradeScore(courses.physics, courseUnits.physics);
const chemistryUnit = computeGradeScore(courses.chemistry, courseUnits.chemistry);
const biologyUnit = computeGradeScore(courses.biology, courseUnits.biology);
const workshopUnit = computeGradeScore(courses.workshop, courseUnits.workshop);
const technicalDrawingUnit = computeGradeScore(courses.technicalDrawing, courseUnits.technicalDrawing);
const humanitiesUnit = computeGradeScore(courses.humanities, courseUnits.humanities);

function computeGradeScore (grade, units){
    let score;
    if(grade ==='A'){
        score = 5 * units;
    }
    else if(grade ==='B'){
        score = 4 * units;
    }
    else if(grade ==='C'){
        score = 3 * units;
    }
    else if(grade ==='D'){
        score = 2 * units;
    }
    else if(grade ==='E'){
        score = 1 * units;
    }
    else{
        score = 0;
    }

    return score;
 }

function fetchUserGrade(courses){
    let promptMessage = ("what was your grade") + courses;
    let grade = prompt(promptMessage);

    while (!isValid(grade)) {
        promptMessage = "Incorrect value. Please type in your grade in" + courses;
        grade = prompt(promptMessage);
    }
    return grade;
}

function isValid(grade){
let validate = grade === 'A' ||
               grade === 'B' ||
               grade === 'C' ||
               grade === 'D' ||
               grade === 'E' ||
               grade === 'F';
    return validate
}
let sumOfPoint = englishUnit + frenchUnit + mathematicsUnit + physicsUnit + chemistryUnit + biologyUnit + workshopUnit + technicalDrawingUnit + humanitiesUnit;

 let gpa = sumOfPoint / totalUnit;

 document.write(gpa);