let user = {
    firstName: prompt('first name'),
    lastName: prompt('Last name'),
    middleName: prompt('Middle Name'),
    dateOfBirth: prompt('Date Of Birth'),
    maritalStatus: prompt('Marital Status'),
    weight: prompt('Weight'),
    height: prompt('Height'),
    highestAcadamicQualification: prompt('Highest Academic Qualification'),
    identificationNumber: prompt('Identification Number'),
    ageClassification: prompt('Age Classification')
};
console.log(user);

ageClassification = 56

if (user.ageClassification <= 7) {
    console.log("toddler");
}
else if (user.ageClassification >= 8 && user.ageClassification <= 12) {
    console.log("adolescent");
}
else if (user.ageClassification >= 13 && user.ageClassification <= 19) {
    console.log("teenager");
}
else if (user.ageClassification >= 20 && user.ageClassification <= 25) {
    console.log("baby adult");
}
else if (user.ageClassification >= 26 && user.ageClassification <= 35) {
    console.log("adult");
}
else if (user.ageClassification >= 36 && user.ageClassification <= 55) {
    console.log("midlife crisis");
}
else {
    console.log("ancestor");
}
