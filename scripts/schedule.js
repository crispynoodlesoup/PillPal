// day getting func
function dayToWeekday(dayNum) {
    switch(dayNum) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

// add each day of the week to schedule
const schedule = document.querySelector(".schedule");
let dateObj = new Date();
for(let i = 0; i < 7; i++) {
    const child = document.createElement("div");
    child.className = "schedule-day";
    const header = document.createElement("h2");
    header.innerText = dayToWeekday((dateObj.getDay() + i) % 7);
    child.appendChild(header);
    schedule.appendChild(child);
}
