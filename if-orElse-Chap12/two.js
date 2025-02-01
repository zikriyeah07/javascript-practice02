let familia = +prompt("How many siblings do you have?")

if (familia < 3  && familia >0){
    alert("You're having a small family");
}
   
else if (familia >= 3 && familia <= 5){
    alert("You're having a medium family");
}


else if (familia > 5 && familia <= 10 ){
    alert("You're having a large family");
}

else if (familia > 10 && familia <= 100) {
    alert("You're having a very large family");
}

else {
    alert("Invalid input. Please enter a number between 1 and 100.");
}