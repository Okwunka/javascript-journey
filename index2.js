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
    age: prompt('Enter Age'),
}


if(user.age >=0 && user.age <= 7) {
    user.ageClassification = ('toddler');
} 
else if(user.age >= 8 && user.age <= 12){
    user.ageClassification = ("adolescent");
} 
else if (user.age >= 13 && user.age <= 19){
    user.ageClassification = ("teenager");
} 
else if (user.age >= 20 && user.age <= 25){
    user.ageClassification = ("baby adult");
} 
else if (user.age >= 26 && user.age <= 35){
    user.ageClassification = ("adult");
} 
else if (user.age >= 36 && user.age <= 55){
    user.ageClassification = ("midlife crisis");
}  
else{
    user.ageClassification = ("ancestor");
}

console.log(user);

