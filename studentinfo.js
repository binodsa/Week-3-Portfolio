// Variables and arrow functions
const dateofBirth = "12/12/1980";

const getStudentName = () => {
    return "Binod Sapkota"; 
};

const getCampusName = () => {
    return "UEL Campus";
};
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

exports.StudentGrade = (marks) => {
    if (marks > 50 && marks < 70) return "B Grade";
    else return "A Grade";
};