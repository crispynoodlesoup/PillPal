const makePrescription = (drugName, dosage, timesDaily, daysPerDose, description, drugDescription) => {
    return {
        drugName,
        dosage,
        timesDaily,
        daysPerDose,
        description,
        drugDescription,
    };
}

let prescriptions = [
    makePrescription("Codiene", "2 pills", 2, 1, "Two pills in the morning, and two before bed. Take additional pills as needed.", "Codeine is used to relieve mild to moderate pain. It belongs to the group of medicines called narcotic analgesics (pain medicines). This medicine acts on the central nervous system (CNS) to relieve pain."),
    makePrescription("Moxafloxacin", "2 drops", 1, 2, "Every other day, put in two eye drops in the morning", "Moxifloxacin is used to treat certain infections caused by bacteria such as pneumonia, and skin, and abdominal infections. Moxifloxacin is also used to prevent and treat plague (a serious infection that may be spread on purpose)"),
    makePrescription("Trulicity", "1 shot", 1, 5, "Once every 5 days, take an insulin shot to the arm", "Trulicity is a once-weekly injectable prescription medicine to improve blood sugar (glucose) in adults with type 2 diabetes (mellitus)."),
];

export { prescriptions, makePrescription };