let hasLicense ;
hasLicense = prompt("What is your name?,Enter Admin if you are" ).toLowerCase() ;
// hasLicense=false;
let checkLicense = hasLicense;


 if (hasLicense == "admin" ) {  
    alert("Welcome Back Admin");  
}
else if (!checkLicense   ) {  
    alert("You are not Admin ");  
} 


else {  
    alert("Error!Not A Valid Input");  
}
