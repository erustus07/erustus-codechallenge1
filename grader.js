// Prompt the user to input student marks
const mark = prompt("Please enter the student's mark (0-100):");

// Convert the input to a number
const markNumber = Number(mark);

// Validate the input
if (isNaN(markNumber) || markNumber < 0 || markNumber > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
} else {
    // Determine the grade
    let grade;
    if (markNumber > 79) {
        grade = 'A';
    } else if (markNumber >= 60) {
        grade = 'B';
    } else if (markNumber >= 49) {
        grade = 'C';
    } else if (markNumber >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the grade
    alert("The student's grade is: " + grade);
}
  
    