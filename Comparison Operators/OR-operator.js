let cityPak;
cityPak = prompt("What is Your Favourite city?","Lahore/Karachi").replace(/^./, c => c.toUpperCase())

if(cityPak === "Lahore" || cityPak === "Karachi" || cityPak === "Peshawar") {
    alert("Welcome to Pakistan! " + cityPak + " is a beautiful city with rich history and culture.");
}

else {
    alert("Sorry, We don't have information about " + cityPak + ". Please try again.");
    
}