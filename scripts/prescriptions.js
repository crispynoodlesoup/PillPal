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
});

cancelButton.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
    modal.className = "modal";
});

prescriptions.forEach(p => {
    let card = document.createElement("div");
    card.className = "medicine-card";
    let title = document.createElement("h3");
    title.innerText = p.drugName;
    let description = document.createElement("p");
    description.innerText = p.description;
    card.appendChild(title);
    card.appendChild(description);
    cards.appendChild(card);
});