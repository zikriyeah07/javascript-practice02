let ageIs = prompt(`Whats your age?`);
let gradeIs;
let cgpIs;
  
if (ageIs >= 17 ){
    
    gradeIs = prompt(`Whats your grade ` );
    if (gradeIs == 11 || gradeIs ==12 ){
        cgpIs = prompt(`Whats your CGPA?`);

        if(cgpIs >= 3.5 && cgpIs <= 4.0){
            alert(`Congratulations! You are eligible for a Dream Vacation!`);
        }
        else{
            alert(`Sorry, You are not eligible for a Dream Vacation! Your CGPA is ${cgpIs}`);
        }
  
    }

    else{
        alert(`Sorry, You are not eligible for a Dream Vacation! Your grade is ${gradeIs}`);
    }

}

else{
    alert(`Sorry, You are not eligible for a Dream Vacation! Your age is ${ageIs}`);
}