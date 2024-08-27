import React from "react";

function Hours() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  
  // Define the opening hours for weekdays and weekends
  const hours = {
    weekdays: { open: 10, close: 16 },  // 10 AM to 4 PM
    weekends: { open: 9, close: 20 }    // 9 AM to 8 PM
  };

  // Determine the shelter's hours based on the current day
  const isWeekend = currentDay === 0 || currentDay === 6; // Sunday (0) or Saturday (6)
  const { open, close } = isWeekend ? hours.weekends : hours.weekdays;

  return (
    <div>
      <h1>{daysOfWeek[currentDay]}</h1>
      <p>{`${open}:00 - ${close}:00`}</p>
    </div>
  );
}

export default Hours;
