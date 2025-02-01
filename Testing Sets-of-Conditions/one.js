let musicTaste = prompt("if you like Pakistani music or  Indian music? ").toUpperCase();
if (musicTaste == "PAKISTANI" || musicTaste == "PAKISTAN" || musicTaste == "URDU") {
    alert("Sure, I'll recommend some Pakistani musicians.");
}

else if (musicTaste == "INDIAN" || musicTaste == "BOLLYWOOD" || musicTaste == "HINDI") {
    alert("Sure, I'll recommend some Indian musicians.");
}
else {
    alert("I think Your music taste is international!")
}


