let marks = prompt("Enter Total marks");
let grade;

if (marks >= 80 && marks <= 100) {
    grade = 'A';
}
else if (marks >= 70 && marks < 80) {
    grade = 'B';
}
else if (marks >= 60 && marks < 70) {
    grade = 'C';
}
else if (marks >= 50 && marks < 60) {
    grade = 'D';
}
else {
    grade = 'F';
}

console.log("Your grade according to marks is ", grade);