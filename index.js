function computeLoan() {
    let amount = document.querySelector('#amount').value;
    //.value ()used to return an array which elements are the property values found in the object
    let interest_rate =document.querySelector('#interest_rate').value;
    let month = document.querySelector('#month').value;
    let interest = (amount * (interest_rate * .01)) /month;
    let payment = ((amount/month) + interest).toFixed(2);
    //tofixed formats using a fixed point notation and by putting 2 it means we want to only select up to to decimals after the point
    document.querySelector('#payment-total').innerHTML = "Monthly Payment=  $" + payment;

}
function reset(){
    document.querySelector("#reset").reset();
}

let button = document.querySelector("#payment-total");
button.addEventListener('click', resetPayment) ;
function resetPayment() {
    document.querySelector('#payment-total').innerHTML= " ";
    //document.querySelector('#payment-total').reset();
}


