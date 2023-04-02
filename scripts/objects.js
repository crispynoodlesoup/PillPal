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
    makePrescription("Codiene", "2 pills", 2, 1, "Two pills in the morning, and two before bed. Take additional pills as needed."),
    makePrescription("Moxafloxacin", "2 drops", 1, 2, "Every other day, put in two eye drops in the morning"),
    makePrescription("Trulicity", "1 shot", 1, 5, "Once every 5 days, take an insulin shot to the arm"),
];

export { prescriptions, makePrescription };