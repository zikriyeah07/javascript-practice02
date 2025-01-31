let bikeUser = prompt("Do you Have a bike? (YES OR NO)").toUpperCase();
if (bikeUser=="YES") {
    let ageOfBike = prompt("Aapki bike kitni purani hai?(New or Old)").toUpperCase();

    if (ageOfBike=="NEW") {
        alert("Congratulations On Your New Bike");
    }
    else if (ageOfBike=="OLD") {
        alert("Dont Worry CD70 is availabalel.");}
    else {
        alert("Invalid Input. Please Chose New or Old");}
    }


else if (bikeUser=="NO") {
    alert("Go to Shop Now Section and Buy One For 50% sale");}

else{
    alert("Please Chose One YES or NO");
}
