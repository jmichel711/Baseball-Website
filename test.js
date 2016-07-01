
var topheaderEL = document.getElementById("Game");
var textChange = "This is what the header will say";
var myNewDiv = document.createElement("div");
var changeP = document.getElementById("changeThisP")
var text=document.createTextNode("This is a sample text");

document.body.appendChild(myNewDiv);
topheaderEL.innerHTML = textChange

changeP.textContent = "This is the new text - changed via JavaScript.";

myNewDiv.appendChild(text);