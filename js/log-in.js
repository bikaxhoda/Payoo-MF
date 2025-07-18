
// step 1: Add an event listener to the login button
document.getElementById(`btn-login`).addEventListener(`click`, function(event) {
 // step 2: prevent the default action of the button
    event.preventDefault();

// step 3: get the phone number and pin from the input fields
    const phoneNumber = document.getElementById(`phone-number`).value;
    const pinNumber = document.getElementById(`pin-number`).value;
    
    console.log(PhoneNumber, pinNumber );

    
}); 
