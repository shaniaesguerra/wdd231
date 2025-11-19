const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");

//"Show the dialog" button opnes the dialog modally
openButton.addEventListener("click", () => {
    dialogBox.showModal(); //make modal show (pop-up show)
});

//"Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialogBox.close(); //close pop-up
});