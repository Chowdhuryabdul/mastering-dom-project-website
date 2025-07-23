document.getElementById('btn').addEventListener('click', function(){
    const textArea = document.getElementById('text-area')
const textAreaValue = textArea.value
    // console.log(textArea);
    const p = document.createElement('p');
    p.innerText = textAreaValue
    const loveYou = document.getElementById('love-you')
    loveYou.appendChild(p)
    /* this is way to delet the comment after pressing one */
   textArea.value = '';
})