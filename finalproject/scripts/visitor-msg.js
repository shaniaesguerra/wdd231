//Use Local Storage to store the date of last visit
//VARIABLES:
let visitCount = localStorage.getItem('pageVisitCount'); //Get current visit count from Local storage
let firstVisitDate = localStorage.getItem("firstVisitDate"); //Get first visit date from local storage
let currentVisitDate = localStorage.getItem("currentVisitDate"); //Get current visit date from local storage
let visitorMsg = document.querySelector('#visitor-msg'); //get container to display message

//If it is their first visit, make a visitCount zero:
if (!visitCount && !firstVisitDate && !currentVisitDate) {
    visitCount = 0
    firstVisitDate = new Date(); //store first visit date
    currentVisitDate = new Date(); //store most current visit date
} else { //convert the string to a number
    visitCount = parseInt(visitCount);
}

//Add to number of visits
visitCount++;

//Update local storage variable
localStorage.setItem('pageVisitCount', visitCount);
localStorage.setItem('firstVisitDate', firstVisitDate);
localStorage.setItem('currentVisitDate', currentVisitDate);

//If it is the first visit:
if (visitCount == 1) {
    visitorMsg.textContent = "Welcome To My Page!";
}
else {
    //Get current visit date:
    currentVisitDate = new Date();
    //currentVisitDate = new Date('2025-12-26'); // for testing day difference value 
    // console.log(currentVisitDate); //uncomment when debugging
    //Update local storage:
    localStorage.setItem('currentVisitDate', currentVisitDate);

    //Get time Difference from first visit to current visit dates:
    //Make it so that the values are Dates:
    let timeDifference = new Date(localStorage.getItem('currentVisitDate')) - new Date(localStorage.getItem('firstVisitDate'));

    //Convert milliseconds into days by dividing the number of milisecons in a day:
    //Use math ceil to make sure it rounds up to full days:
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    //console.log(`Day Difference: ${daysDifference}`); //uncomment when debugging

    //Compare the number of days between visits:
    //If amount of time is less than a day:
    if (daysDifference < 1) {
        //Show the message "Back so soon! Awesome!"
        visitorMsg.textContent = "Glad to see you back so soon!";
    }
    //If amount of time is a day or more than a day
    else if (daysDifference >= 1) {
        //if amount of time passed is a day
        if (daysDifference == 1) {
            //display message as: "You last visited (numDays) days ago."
            visitorMsg.textContent = `Glad to see you! You last visited ${daysDifference} day ago.`;
        }
        else {
            //else display number of days as: "You last visited (numDays) days ago."
            visitorMsg.textContent = `Long time no See! You last visited ${daysDifference} days ago.`;
        }

    }
}