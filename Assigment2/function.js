let customerBill = +prompt("What is Yourt total Bill?");
let customerStatus ;
let customer;


if (customerBill >= 1000) {
    // alert("Minimun Bill Amount! Please Enter a amount above 1000 ");
    customerStatus = prompt(` Do You Have Membership?  `, `Yes/No`).toLowerCase();

    if (customerStatus == 'yes') {
  
    customer = prompt( "What is your Rank? (Gold/Silver)").toLocaleUpperCase();
        if (customer == 'GOLD') {
      alert(customerBill = customerBill - 100)  
         }
       else if (customer == 'SILVER') {
       alert( customerBill = customerBill - 50)
         }
    
       else {
        alert("Invalid Membership Rank!");
         }
     }

    else if (customerStatus == `no`) {
    alert("Shop Now And Become a member to avail 100 on gold and 50 rupee discount")
     }

    else {
    alert("Invalid Input! Please Enter Yes or No");
     }

}
else {
    alert("Minimun Bill Amount! Please Enter a amount above 1000 ");
}



