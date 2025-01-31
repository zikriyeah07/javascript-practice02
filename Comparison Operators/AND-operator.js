let ageIS = prompt("Enter Your age in Numbers ").toLocaleUpperCase();
let marrageStatus = prompt("Your Martial Status(Married/Single)","Married/Single"  ).toLocaleUpperCase();

if(ageIS >= 25 && ageIS <= 60 && marrageStatus == "MARRIED") {
    alert("Welcome, You are eligible for a Dream Vacation! and your age is " + ageIS + " years old");
}

else if(ageIS >= 25 && ageIS <= 60 && marrageStatus == "SINGLE") {
    alert("Not Eligibale as your marrage status is single");
}

else if(ageIS <= 24 && marrageStatus == "MARRIED"){
    alert("Your age dosnt fullfill our company while you are married Criteria as yor age is " + ageIS + " years old");
} 

else if(ageIS <= 24 && marrageStatus == "SINGLE"){
    alert("Your age and Martial Status dosnt fullfill our company Criteria as yor age is" + ageIS + " years old");
} 

else {
    alert("Sorry, You are not eligible for a Dream Vacation! and your age is " + ageIS + " years old");
}