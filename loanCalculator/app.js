/* this will help with applications when I want to add input values to DOM elements */

//Listen for Submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate the Results
function calculateResults(e) {
    console.log('Caclulating')
    //UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //Calculating the inputs
    const principal = parseFloat(amount.value); //parseFloat() turns it into a decimal
    const calculatedInterest = parseFloat(interest.value) / 100/ 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    
    //Compute monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2); //toFixed() sets the decimal places
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)- principal).toFixed(2);
    } else {
        //create an element that will show the error. See "Shoe Error Message" to show error
        showError('Please check your numbers');
    }



    e.preventDefault();
};

//Show Error message
function showError(error) {
    //create div
    const errorDiv = document.createElement('div');

    //Get elements so we cann insert error message into the DOM
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    //create the text node and append to div - inserting the text node (document.createTextNode)
    errorDiv.appendChild(document.createTextNode(error));

    //Insert the error message above heading
    card.insertBefore(errorDiv, heading);

    //Set the timeout so error message doesnt stay in interface (clear after 3 seconds)
    setTimeout(clearError, 2000);
}

//Clear Error
function clearError() {
    document.querySelector('.alert').remove();
}
