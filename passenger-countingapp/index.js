// document.getElementById("customer") 

let customer = 0
let customerEl= document.getElementById("customer-el")//passing in argurments/parameters. 
let saveEl= document.getElementById("entries-el")

function increment (){
  customer++
  customerEl.textContent= customer
   
    
}

function save() {
    let saveCustomer=customer + " - "
    saveEl.textContent +=saveCustomer
    customerEl.textContent = 0 
    customer =0
    
}




