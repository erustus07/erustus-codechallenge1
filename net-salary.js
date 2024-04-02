// Get basic salary and benefits from the user
const basicSalary = prompt("Enter your basic salary:");
const benefits = prompt("Enter your benefits:");

// Validate inputs
if (isNaN(basicSalary) || basicSalary <= 0 || isNaN(benefits) || benefits <= 0) {
  alert("Invalid inputs. Please enter a positive number for both basic salary and benefits.");
  return;
}

// Calculate tax based on the KRA tax rates
let tax = 0;
if (basicSalary <= 12242) {
  tax = 0;
} else if (basicSalary <= 23414) {
  tax = 0.1 * (basicSalary - 12242);
} else if (basicSalary <= 34654) {
  tax = 1224.04 + 0.25 * (basicSalary - 23414);
} else if (basicSalary <= 46850) {
  tax = 4626.04 + 0.3 * (basicSalary - 34654);
} else if (basicSalary > 46850) {
  tax = 12465.04 + 0.35 * (basicSalary - 46850);
}

console.log(tax);//tax 