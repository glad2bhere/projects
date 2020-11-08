// Stock Constructor
function Stock(ticker, price, dividend) {
        this.ticker = ticker;
        this.price = price;
        this.dividend = dividend;
}

// UI Constructor
function UI () {}

UI.prototype.addStocktoList = function(stock){
    //console.log(stock);
    const list = document.getElementById('stock-list');
    //This creates the Table row (tr)
    const row = document.createElement('tr');
    //Insert columns
    row.innerHTML = `
        <td>${stock.ticker}</td>
        <td>${stock.price}</td>
        <td>${stock.dividend}</td>
        <td><a href="#" class="delete">X</td>
    `;

    list.appendChild(row);
}

//ShowAlert
UI.prototype.showAlert = function(message,className) {
    //Create div
    const div = document.createElement('div');
    //Add Classes
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get form
    const form = document.querySelector('#stock-form');
    //Insert Alert
    container.insertBefore(div, form);
    //disapper after x amount of time
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

//Delete a stocks
UI.prototype.deleteStock = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Clear fields
UI.prototype.clearFields = function() {
    document.getElementById('ticker').value = '';
    document.getElementById('price').value = '';
    document.getElementById('divYield').value = '';
}

// Event Listener to add a stock
document.getElementById('stock-form').addEventListener('submit', (e) => {
    //This will get the form values
    const ticker = document.getElementById('ticker').value,
          price = document.getElementById('price').value,
          divYield = document.getElementById('divYield').value
          
    //console.log(ticker, price, divYield);

    //Instantiate Stock to an object
    const stock = new Stock(ticker, price, divYield);
    //console.log(stock);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(ticker === '' || price === '' || divYield === '') {
    //Error message
        //alert('Failed');
        ui.showAlert('You must fill in all the fields','error')
    } else {
    //Add Stock to the list
        ui.addStocktoList(stock);

    //Show Success
        ui.showAlert('Stock added!', 'success');

    //Clear fields
        ui.clearFields();
    }

    e.preventDefault(); //Keeps the fields in the inputs
});

//Event Listener for deleting stocks
document.getElementById('stock-list').addEventListener('click', (e) => {
    
    const ui = new UI();

    ui.deleteStock(e.target);
    ui.showAlert('Stock removed', 'success');


    e.preventDefault();
});



