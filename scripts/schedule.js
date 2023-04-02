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

const makePrescription = (drugName, dosage, timesDaily, daysPerDose, description) => {
    return {
        drugName,
        dosage,
        timesDaily,
        daysPerDose,
        description,
    };
}

let prescriptions = [
    makePrescription("Codiene", "2 pills", 3, 1, "Two pills in the morning, two during lunch, and two before bed, and this is just to make sure I can write an extra detailed description without the page breaking"),
    makePrescription("Moxafloxacin", "2 drops", 1, 2, "Every other day, put in two eye drops in the morning"),
    makePrescription("Trulicity", "1 shot", 1, 5, "Once every 5 days, take an insulin shot to the arm"),
];

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

function addDrugToDrugList(drugList, drugName, dosage, timesDaily) {
    const drug = document.createElement("div");
    drug.className = "drug";
    drug.setAttribute("href", "#popup1");

    let text = "";
    if(timesDaily !== 1) {
        text = `${dosage} of ${drugName}, ${timesDaily}x`;
    } else {
        text = `${dosage} of ${drugName}`;
    }
    drug.innerText = text;
    drugList.appendChild(drug);
}

[...schedule.children].forEach(day => {
    prescriptions.forEach(p => {
        if(weekdayToDay(day.children[0].innerText) % p.daysPerDose === 0) {
            addDrugToDrugList(day.children[1], p.drugName, p.dosage, p.timesDaily);
        }
    });

    if([...day.children[1].children].length === 0) {
        const nothing = document.createElement("p");
        nothing.classList.add("nothing");
        nothing.innerText = "nothing";
        day.children[1].appendChild(nothing);
    }
});

let todayMeds = document.querySelector(".today-meds");

prescriptions.forEach(p => {
    let card = document.createElement("div");
    card.className = "medicine-card";
    let title = document.createElement("h3");
    title.innerText = p.drugName;
    let description = document.createElement("p");
    description.innerText = p.description;
    card.appendChild(title);
    card.appendChild(description);
    todayMeds.appendChild(card);
});

const popup = document.querySelector('#popup1');
popup.style.display = 'none';
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('drug')) {
    event.preventDefault();

    // Show the popup
    popup.style.display = 'block';
  }
});

// Add a click event listener to the close button
document.querySelector('.popup .close').addEventListener('click', function(event) {

  // Hide the popup
  popup.style.display = 'none';
});

