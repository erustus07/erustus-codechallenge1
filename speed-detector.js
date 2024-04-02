function calculateDemeritPoints(speed) {
    if (speed <= 70) {
      return "Ok";
    }
  
    const demeritPoints = Math.floor((speed - 70) / 5); // Calculate demerit points (integer division)
    return demeritPoints > 12 ? "License suspended" : `Points: ${demeritPoints}`;
  }
  
  const carSpeed = parseInt(prompt("Enter car speed (km/h): "));
  const result = calculateDemeritPoints(carSpeed);
  console.log(result);