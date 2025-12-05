// Get the buttons
const moreInfoBtn1 = document.querySelector("#moreInfoBtn1");
const moreInfoBtn2 = document.querySelector("#moreInfoBtn2");
const moreInfoBtn3 = document.querySelector("#moreInfoBtn3");
const moreInfoBtn4 = document.querySelector("#moreInfoBtn4");

//Get the Dialog Box and it's elements
const dialogBox = document.querySelector("#dialogBox");
const closeBtn = document.querySelector("#closeBtn");
const dialogBoxText = document.querySelector("#dialogBox div");


//"Close" button closes the dialog
closeBtn.addEventListener("click", () => {
    dialogBox.close(); //close pop-up
});

//"Show the dialog" button opnes the dialog modally
moreInfoBtn1.addEventListener("click", () => {
    dialogBox.showModal(); //make modal show (pop-up show)
    dialogBoxText.innerHTML = `
        <h2>🎮 Playing cozy and adventure video games</h2>
        <div>
            <p>Here is a list of game examples:<p>
            <ul>
                <li>Animal Crossing</li>
                <li>Sky: The Children Of Light</li>
                <li>Palia</li>
                <li>Spiritfarer</li>
            </ul>
        </div>`;

});

moreInfoBtn2.addEventListener("click", () => {
    dialogBox.showModal(); //make modal show (pop-up show)
    dialogBoxText.innerHTML = `
        <h2>🍿 Watching movies and series</h2>
        <div>
            <p>Here is a list of movies and series I like to watch:<p>
            <h3>Movies:</h3>
            <ul>
                <li>My Neighbor Totoro</li>
                <li>Howl's Moving Castle</li>
                <li>Miracle in Cell No.7</li>
                <li>Encanto</li>
            </ul>
            <h3>Series:</h3>
            <ul>
                <li>Stranger Things</li>
                <li>It's Okay to Not be Okay</li>
                <li>Steven Universe</li>
                <li>Arcane</li>
            </ul>
        </div>`;

});

moreInfoBtn3.addEventListener("click", () => {
    dialogBox.showModal(); //make modal show (pop-up show)
    dialogBoxText.innerHTML = `
        <h2>🎼 Listening to good music</h2>
        <div>
            <p>Here is a list of some music I listen to:<p>
            <ul>
                <li>Golden by HUNTR/X, EJAE, AUDREY NUNA, and REI AMI</li>
                <li>If You Believe by Strive to Be, Patch Crowe</li>
                <li>Peace in Christ by McKena Hixson</li>
                <li>Be Happy by QWER</li>
                <li>Bonvoyage by Kim Daniel, 1of1</li>
            </ul>
        </div>`;
});

moreInfoBtn4.addEventListener("click", () => {
    dialogBox.showModal(); //make modal show (pop-up show)
    dialogBoxText.innerHTML = `
        <h2>🥐 Cooking and Baking Bread</h2>
        <div>
            <p>Here is a list of things I baked:<p>
            <ul>
                <li>Spanish Bread (Filipino Classic Bread)</li>
                <li>Banana Bread</li>
                <li>Ensaymada (Filipino Classic Bread)</li>
                <li>Brigadeiro Cake</li>
            </ul>
        </div>`;
});




