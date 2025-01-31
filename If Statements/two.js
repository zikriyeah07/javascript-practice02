let eidIS = prompt("Is it Eid Day? (YES or NO)").toUpperCase();
if (eidIS == "YES") {
    alert("Eid Mubrak! Enjoy the special day!");

    let eatEid = prompt("Whats cooking at your home?");

    alert("Enjoy Your Eid With the dish " + eatEid + " !");


}

else if (eidIS == "NO") {
    alert("It's not Eid Day! Have a good day!");
}

else {
    alert("Invalid input. Please refresh and enter 'YES' or 'NO'.");
}
