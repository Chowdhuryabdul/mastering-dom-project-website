/* To converted string to number in the textfield */
function convertedToNumberTextField(id){
    const textFieldValue = document.getElementById(id).innerText
    const convertedTextFiledValueNumber = parseInt(textFieldValue)
    return convertedTextFiledValueNumber
}
/* To converted string to number in the inputfield */
function convertedToNumberInputField(id){
    const inputFieldValue = document.getElementById(id).value
    const convertedInputFiledValueNumber = parseInt(inputFieldValue)
    return convertedInputFiledValueNumber
}

/* to set as innertext */
function setInnerText (id, value){
   document.getElementById(id).innerText = value;
}

/* show a section */
function showSectionById(id){
    /* hide all the sections */
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-form').classList.add('hidden')
    /* Show the section with the provided id as parameter */
    document.getElementById(id).classList.remove('hidden')
}