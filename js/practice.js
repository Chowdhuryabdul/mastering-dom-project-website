

const allBtn = document.getElementsByClassName('add-btn');
for(let btn of allBtn){
 btn.addEventListener('click', function(e){
    /* find the place and price */
     const place = e.target.parentNode.childNodes[1].innerText
     const price = e.target.parentNode.childNodes[3].childNodes[1].innerText
     const convertedPrice = parseInt(price)

     /* to make some style */

     e.target.parentNode.parentNode.style.backgroundColor = 'gray'
    e.target.style.backgroundColor = 'red'
   
     /* to disabled the btn after one click */

     e.target.setAttribute ('disabled', true )

     /* find the total cost */

    //  const totalCost = document.getElementById('total-cost').innerText;
    //  const convertedTotalCost = parseInt(totalCost)

     const totalCost = convertedToNumber('total-cost')

     
     /* set the cost in the total cost */
    //  document.getElementById('total-cost').innerText = convertedPrice + totalCost
     const sum = convertedPrice + totalCost
     setInnerText('total-cost', sum)

    
     
     /* find the grand total */
     /* const grandTotal = document.getElementById('grand-total').innerText;
     const convertedGrandtotal = parseInt(grandTotal) */
     
     const grandTotal = convertedToNumber('grand-total')

    /* set the grandtotal  */
    // document.getElementById('grand-total').innerText = convertedPrice + totalCost
    setInnerText('grand-total', sum)

  /*   const busPrice = convertedToNumber('bus-price')
    const newGrandTotalWithBusPrice = busPrice + grandTotal;
    console.log(newGrandTotalWithBusPrice); */

     /* Find the total budget */
    const TotalBudget = convertedToNumber('budget')
    const remainingBudget = TotalBudget - parseInt(price)
    setInnerText('budget', remainingBudget)
    if(TotalBudget + remainingBudget < 0){
        alert ('You need to earn more')
    }
    // console.log(TotalBudget);
    
    /* set new childs in a decalred element */
    const selectedContainer = document.getElementById('selected-place-container');
    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = place
    const p2 = document.createElement('p2');
    p2.innerText = price
    li.appendChild(p)
    li.appendChild(p2)
    selectedContainer.appendChild(li)   
 })

}