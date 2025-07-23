
document.getElementById('add-money-btn-central').addEventListener('click', function(e){
    /* prevent page reload after form submit */
    e.preventDefault();
    // const addedAmount = document.getElementById('add-money-amount').value
    const addedAmount = convertedToNumberInputField('add-money-amount')
    const addMoneyPass = convertedToNumberInputField('add-money-password')
    /* validation if you insert the amount is not a number */
    if(isNaN(addedAmount)){
        alert ('Failed to add money')
        /* if i want to stop something to proceed then i use return */
        return
    }

    if(addMoneyPass === 1234){       
        const existingBalance = convertedToNumberTextField('existing-amount')
        const newAmountAfterAdding = addedAmount + existingBalance
        setInnerText ('existing-amount', newAmountAfterAdding)

        /* here is the transaction section */
        // const transactionContainer = document.getElementById('transaction-container');
        const p = document.createElement('p')
        p.innerText = `Added: ${addedAmount} Tk. Balance: ${newAmountAfterAdding}`
        p.style.backgroundColor = 'red'
        console.log(p);
        /* should a common function to append this child as we will do such in several places */
        document.getElementById('transaction-container').appendChild(p)
    }else{
        alert ('Your mobile Number or password is wrong')
    }

})