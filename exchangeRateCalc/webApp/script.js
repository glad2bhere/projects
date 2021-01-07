const currencyEl_1 = document.getElementById('currency-one');
const currencyEl_2 = document.getElementById('currency-two');
const amountEl_1 = document.getElementById('amount-one');
const amountEl_2 = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update DOM
function calculate() {
    const currency_one = currencyEl_1.value;
    const currency_two = currencyEl_2.value;

    //console.log(currencyEl_1, currencyEl_2);
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const rate = data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
        });
}

//Event listeners
currencyEl_1.addEventListener('change', calculate);
amountEl_1.addEventListener('input', calculate);
currencyEl_2.addEventListener('change', calculate);
amountEl_2.addEventListener('input', calculate);

calculate();

