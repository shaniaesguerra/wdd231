//Get url for info
const messageInfo = new URLSearchParams(window.location.search);
//console.log(messageInfo); //for debugging

// Variables to get input values:
// firstName = required
// lastName = required
// email = required
// phone = required
// contactMethod = required
// messageType = required
// messageTxt = required

/****For Debugging*****/
// console.log(messageInfo.get('firstName'));
// console.log(messageInfo.get('lastName'));
// console.log(messageInfo.get('email'));
// console.log(messageInfo.get('phone'));
// console.log(messageInfo.get('contactMethod'));
// console.log(messageInfo.get('messageType'));
// console.log(messageInfo.get('messageTxt'));
/*********************/

const results = document.querySelector("#form-result");

results.innerHTML = `
    <p>Thank you so much for you message, ${messageInfo.get('firstName')} ${messageInfo.get('lastName')}</p>
    <p>We'll make sure to get back to you in 2-3 business days on your preferred contact method.</p><br>
    
    <section>
        <h2>Primary Contact Information:</h2>
        <p>Full Name: ${messageInfo.get('firstName')} ${messageInfo.get('lastName')}</p>
        <p>Email: ${messageInfo.get('email')}</p>
        <p>Phone: ${messageInfo.get('phone')}</p>
        <p>Preferred Contact Method: ${messageInfo.get('contactMethod')}</p><br>
     </section>
    
    <section>
        <h2>Inquiry Information:</h2>
        <p>Type of Iquiry: ${messageInfo.get('messageType')}</p>
        <p>Message: ${messageInfo.get('messageTxt')}</p><br>
    </section>
    `;