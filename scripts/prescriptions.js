const cards = document.querySelector(".prescription-cards");
const addButton =document.querySelector(".add-drug");
const modal = document.querySelector(".modal");

addButton.addEventListener("click", () => {
    modal.style.visibility = "visible";
});

