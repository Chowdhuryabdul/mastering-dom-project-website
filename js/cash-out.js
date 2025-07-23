document.getElementById('cash-out-btn-central').addEventListener('click', function(e){
e.preventDefault();
const cashedOutAmount = convertedToNumberInputField('cash-out-amount');
const cashOutPass = convertedToNumberInputField('cash-out-password');
 if(isNaN(cashedOutAmount)){
        alert ('Failed to cash out')
        return
    }
    
if(cashOutPass === 1234){
    const existingBalance = convertedToNumberTextField('existing-amount');
    const newBalanceAftreCashOut = existingBalance - cashedOutAmount ;
    setInnerText('existing-amount', newBalanceAftreCashOut)

   
    if(existingBalance < cashedOutAmount){
        alert ('You do not have enough amount')
        return;   
    }
    /* add the transaction history  */
    const div = document.createElement('div')
    div.classList.add('bg-yellow-300')
    div.innerHTML = `
    <h4 class = "text-2xl font-bold">Cash Out</h4>
    <p class = "text-2xl font-bold">${cashedOutAmount} withdrwan. New Balance: ${newBalanceAftreCashOut}</p>
    `
    document.getElementById('transaction-container').appendChild(div)
}else{
    alert ('Your phonenumber or password is wrong')
}
})