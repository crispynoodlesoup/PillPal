const cards = document.querySelector(".prescription-cards");
const addButton = document.querySelector(".add-drug");
const modal = document.querySelector(".modal");
const submitButton = document.querySelector(".submit");

addButton.addEventListener("click", () => {
    modal.style.visibility = "visible";
    modal.className = "modal opaque";
});

submitButton.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
    modal.className = "modal";
});