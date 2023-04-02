import { prescriptions, makePrescription } from "./objects.js";

const cards = document.querySelector(".prescription-cards");
const addButton = document.querySelector(".add-drug");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");

addButton.addEventListener("click", () => {
    modal.style.visibility = "visible";
    modal.className = "modal opaque";
});

submitButton.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
    modal.className = "modal";
    let card = document.createElement("div");
    card.className = "medicine-card";
    let title = document.createElement("h2");
    title.innerText = p.drugName;
    let description = document.createElement("p");
    let s = "";
    let daysthingy = "";
    if(p.daysPerDose > 1) {
        daysthingy = p.daysPerDose;
        s = "s";
    }
    let s2 = "";
    if(p.timesDaily > 1) {
        s2 = "s";
    }
    description.innerText = `${p.timesDaily} dose${s2} every ${p.daysPerDose} day${s}`;
    description.className = "d1";
    
    let description2 = document.createElement("p");
    description2.innerText = p.drugDescription;
    description2.className = "d2";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(description2);
    cards.appendChild(card);
});

cancelButton.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
    modal.className = "modal";
});

prescriptions.forEach(p => {
    let card = document.createElement("div");
    card.className = "medicine-card";
    let title = document.createElement("h2");
    title.innerText = p.drugName;
    let description = document.createElement("p");
    let s = "";
    let daysthingy = "";
    if(p.daysPerDose > 1) {
        daysthingy = p.daysPerDose;
        s = "s";
    }
    let s2 = "";
    if(p.timesDaily > 1) {
        s2 = "s";
    }
    description.innerText = `${p.timesDaily} dose${s2} every ${p.daysPerDose} day${s}`;
    description.className = "d1";
    
    let description2 = document.createElement("p");
    description2.innerText = p.drugDescription;
    description2.className = "d2";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(description2);
    cards.appendChild(card);
});