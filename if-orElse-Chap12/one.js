let cityIS = prompt("What is your favourite Pakistani city").toLocaleUpperCase();

if (cityIS == "LAHORE" || cityIS == "KARACHI" || cityIS == "ISLAMABAD"|| cityIS == "PESHAWAR" || cityIS == "MULTAN" || cityIS == "QUETTA" )  {
    alert("Welcome to Pakistan! " + cityIS + " is a beautiful city with rich history and culture.");
}

else if (cityIS == "SAWABI" || cityIS == "MARDAN"|| cityIS == "MANSERA"|| cityIS == "KOHAT" || cityIS == "SAWAT" || cityIS == "CHARSADA") {
    alert("Welcome to Pakistan " + cityIS + " is a beautiful villiage which is very close our heart.");
}


else {
    alert("Sorry, We don't have information about " + cityIS + ". Please try again.");
    
}