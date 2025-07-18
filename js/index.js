/* function  handelSelect(){
    console.log('boss select korsi');
} */
/* 
    now as i have the same class name i can get all of them with array and use one function to call them */

const allBtn = document.getElementsByClassName('add-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
         e.target.setAttribute ('disabled', true)
        // console.log('boss select korsi');
        // console.log(e.target.parentNode.childNodes[1].innerText);
        const placeName = e.target.parentNode.childNodes[1].innerText
        // console.log(e.target.parentNode.childNodes[3].innerText);
        const priceTag = e.target.parentNode.childNodes[3].childNodes[1].innerText
        // console.log( priceTag);
        const selectedContainer = document.getElementById('selected-place-container')
        const li = document.createElement('li')

        const p = document.createElement('p')
        p.innerText = placeName
        const p2 = document.createElement('p2')
        p2.innerText = priceTag
        e.target.style.backgroundColor = 'red'
        e.target.parentNode.parentNode.style.backgroundColor ='yellow'
       
        
        li.appendChild(p)
        li.appendChild(p2)
        selectedContainer.appendChild(li)

        let budget = document.getElementById('budget').innerText
        const covertedBudgetNumber = parseInt(budget)
       
        if(covertedBudgetNumber - parseInt(priceTag) < 0){
            alert ('low budget earn more')
            return;
        }
         budget = document.getElementById('budget').innerText = covertedBudgetNumber - parseInt(priceTag)
        // console.log(budget);
        

        totalCost('total-cost', parseInt(priceTag))
        /*  const totalCOst = document.getElementById('total-cost').innerText;
         // console.log(typeof parseInt (totalCOst));
         const convertedTotalCost = parseInt(totalCOst);
         const sum = convertedTotalCost + parseInt(priceTag)  i have taken thise whole part in the down function to avoid repeating the same sort of code*/

        // console.log(sum);
        // document.getElementById('total-cost').innerText = /* convertedTotalCost + parseInt(priceTag) */ sum
        // setInnertext('total-cost', sum)  /* - here i call the function have written down to set the innertxet */

        grandTotal('grand-total', parseInt(priceTag))
    })
}

/* this is for the totalcost */
function totalCost(id, value) {
    const totalCOst = document.getElementById(id).innerText
    // console.log(typeof parseInt (totalCOst));
    const convertedTotalCost = parseInt(totalCOst);
    const sum = convertedTotalCost + parseInt(value)
    setInnertext(id, sum)
}
//    this is for the grand total 
    function grandTotal(category) {
        // console.log(category);
        const totalCOst = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCOst)
    // console.log(convertedTotalCost);
    // setInnertext('grand-total', convertedTotalCost )
    if(category == 'Bus'){
       setInnertext('grand-total', convertedTotalCost + 100 ) 
    }
    else if(category == 'Train'){
        setInnertext('grand-total', convertedTotalCost - 200)
    }else if (category == 'Flight'){
        setInnertext('grand-total', convertedTotalCost + 500)
    }else{
        setInnertext('grand-total', convertedTotalCost)
    }
   /*  const grandTotal = document.getElementById(id).innerText
    // console.log(grandTotal);
    const convertedGrandTotal = parseInt(grandTotal)
    const sumOfGrandToral = convertedGrandTotal + parseInt(value)
    setInnertext(id, sumOfGrandToral) */
    
}

/* THIS IS USING TO SET INNERTEXT IN ALL THE PLACES WHERE I WANT TO CHANGE THE INNERTEXT */
function setInnertext(id, value) { /* i have to put the id of the element, of which i want to change the innertext and in value i have to put the new value after changing */
    document.getElementById(id).innerText = value
}

/* to disable the btn */
/* function doSomething(){
    alert('The button is clicked adn the function ran!')
} */