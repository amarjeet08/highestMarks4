let marks = [80,90,75,85,95];
let highestMarks = marks[0]//initialize the highest marks to the first student's marks
for(let i = 1; i < marks.length; i++){
  highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks; // use ternary operator to update highest marks
}
console.log(`The highest marks in the class is ${highestMarks}`) //display highest marks
