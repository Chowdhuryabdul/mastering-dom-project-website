/* to convert the string to Number */

function convertedToNumber(id){
    const textFiledValue = document.getElementById(id).innerText;
    const textFiledValueNumber = parseInt(textFiledValue);
    return textFiledValueNumber
}

/* to set innertext */
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


/* Add the price of bus, train and flight with the grandtotal */
document.getElementById('bus-btn').addEventListener('click', function(){
    const busPrice = convertedToNumber('bus-price')
    const grandTotal = convertedToNumber('grand-total')
    const totalPrice = busPrice + grandTotal
    setInnerText('grand-total', totalPrice)
})

document.getElementById('train-btn').addEventListener('click', function(){
    const trainPrice = convertedToNumber('train-price')
     const grandTotal = convertedToNumber('grand-total')
    const totalPrice =  grandTotal - trainPrice 
    setInnerText('grand-total', totalPrice)
})
document.getElementById('flight-btn').addEventListener('click', function(){
    const flightPrice = convertedToNumber('flight-price')
     const grandTotal = convertedToNumber('grand-total')
    const totalPrice =  grandTotal + flightPrice 
    setInnerText('grand-total', totalPrice)
})






