// let defines the variable, "this is what appears on the card"
// do not end an array with a comma
// end each command with a semicolon

//array, this is where you list cards
let cards = [
    "drink a glass of water",
    "go outside",
    "journal prompt: blah blah blah",
    "meow meow meow",
    "put on a hat",
    "https://youtu.be/wTqsV3q7rRU?si=Fnem2_kR6QwKly0N"
    ];

let previndex = -1;
let cardindex = generatenumber();
writemessage(cardindex);

function writemessage(cardIndex){
    let cardspace = document.querySelector("#cardspace");
    let visablecardmessage;
    let cardmessage = cards[cardIndex];
    
    // Figures out whether it is a link or not
    // can add other exceptions by adding another || (or)
    if (cards[cardIndex].includes("http") || cards[cardIndex].includes(".com")) {
        // if the card is a .com link then make a link on the website
        visablecardmessage = document.createElement("a");
        visablecardmessage.setAttribute("href", cardmessage);
        visablecardmessage.innerHTML = "click me";

        // add a newline between button and link
        cardspace.appendChild(document.createElement("br"));
        cardspace.appendChild(document.createElement("br"));
    
    } else {
        // regular word cards (NOT A LINK)
    
        //creating the space for the visable card message
        visablecardmessage = document.createElement("p");
    
        //makes the card message visable
        visablecardmessage.innerHTML = cardmessage;
    }
    
    //attaching the visable card message to the page
    cardspace.appendChild(visablecardmessage);
}

function generatenumber() {
    
    let cardindex;
    if (previndex == -1){
        cardindex = Math.random() * cards.length;
        cardindex = Math.floor(cardindex);
    } else {
        cardindex = previndex;
        while (cardindex == previndex) {
            cardindex = Math.random() * cards.length;
            cardindex = Math.floor(cardindex);
        }
        let cardspace = document.querySelector("#cardspace");
        cardspace.removeChild(cardspace.lastChild);

        // check if the last element is a button or br
        if (cardspace.lastChild.tagName == "BR")
        {
            cardspace.removeChild(cardspace.lastChild);
            cardspace.removeChild(cardspace.lastChild);
        }
        writemessage(cardindex);
    }
    previndex = cardindex;
    return cardindex;
}