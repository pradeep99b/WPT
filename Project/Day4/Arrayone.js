/*for a given array with marks of student 85,97,44,37,76,60 
find the average marks off the entire class. */


let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
let count = marks.length;
for (let mark of marks) {
    sum += mark;

}



console.log(`avg marks of the class = ${sum / count}`);

