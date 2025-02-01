let langAsk = +prompt("Please enter How many Languages You Know?","1,2,3,4,5....");
let lang;
alert("Wow its nice you have good hands on " + langAsk + " Languages!" );

if (langAsk == 1) {

    lang = prompt("Please enter name of " + langAsk + "which language you know?");
    
alert("You have good hands on one language thats " + lang + " Language!")

} 

else if (langAsk >= 2) {
    
     lang = prompt("Please enter names of " + langAsk + " which language you know?");
    alert("You have good hands on " + langAsk +" Languages thats "  + lang + " Language!") }

    else{
        alert("You have good hands on " + langAsk + " Languages that's " + lang)
    }
