document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    // console.log('see the log in btn');
    const phoneNumber = document.getElementById('login-mobile-number').value 
    
    const pinCode = document.getElementById('login-pin').value 
    if(phoneNumber === '2222' && pinCode === '1234'){
        // console.log('You are logged in');
        window.location.href = '/home.html'
    }else{
        alert ('Your phone number or pin code is wrong')
    }
})