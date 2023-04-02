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

function weekdayToDay(dayNum) {
    switch(dayNum) {
        case "Sunday": return 0;
        case "Monday": return 1;
        case "Tuesday": return 2;
        case "Wednesday": return 3;
        case "Thursday": return 4;
        case "Friday": return 5;
        case "Saturday": return 6;
    }
}

// add each day of the week to schedule
const schedule = document.querySelector(".week-schedule");
let dateObj = new Date();
for(let i = 0; i < 7; i++) {
    const day = document.createElement("div");
    day.className = "schedule-day";
    const header = document.createElement("h3");
    header.innerText = dayToWeekday((dateObj.getDay() + i) % 7);
    const drugList = document.createElement("div");
    drugList.className = "drug-list";
    day.appendChild(header);
    day.appendChild(drugList);
    schedule.appendChild(day);
}

function addDrug(drugList, drugName, dosage, times) {
    const drug = document.createElement("div");
    drug.className = "drug";

    let text = "";
    if(times !== 1) {
        text = `${dosage}mg ${drugName} ${times}x`;
    } else {
        text = `${dosage}mg ${drugName}`;
    }
    drug.innerText = text;
    drugList.appendChild(drug);
}

[...schedule.children].forEach(day => {
    if(weekdayToDay(day.children[0].innerText) % 2 === 0) {
        addDrug(day.children[1], "Codiene", 4, 3);
    }
    
    if((weekdayToDay(day.children[0].innerText) + 1) % 3 === 0) {
        addDrug(day.children[1], "Tylenol", 40, 1);
    }
    
    if((weekdayToDay(day.children[0].innerText)) % 3 === 0) {
        addDrug(day.children[1], "wads", 40, 1);
    }
    
    if((weekdayToDay(day.children[0].innerText) + 1) % 1 === 0) {
        addDrug(day.children[1], "ikb", 40, 1);
    }

    if([...day.children[1].children].length === 0) {
        const nothing = document.createElement("p");
        nothing.classList.add("nothing");
        nothing.innerText = "nothing";
        day.children[1].appendChild(nothing);
    }
});