// let defines the variable, "this is what appears on the card"
// do not end an array with a comma
// end each command with a semicolon

//array, this is where you list cards
let cards = [
    "drink a glass of water",
    "go outside",
    "journal prompt: blah blah blah"
    ];

let previndex = -1;
let cardindex = generatenumber();
writemessage();

function writemessage(){
    let cardspace = document.querySelector("#cardspace");
    let visablecardmessage;
    let cardmessage = cards[cardindex];
    console.log(cardindex);
    
    // Figures out whether it is a link or not
    // can add other exceptions by adding another || (or)
    if (cards[cardindex].includes(".com") || cards[cardindex].includes(".org")) {
        // if the card is a .com link then make a link on the website
        visablecardmessage = document.createElement("a");
        visablecardmessage.setAttribute("href", cardmessage);
        visablecardmessage.innerHTML = "click me";
    
    
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
    console.log(previndex);
    let cardindex;
   if (previndex == -1){
    cardindex = Math.random() * cards.length;
    cardindex = Math.floor(cardindex);
   } else {
    cardindex = previndex;
     while (cardindex == previndex){
         cardindex = Math.random() * cards.length;
         cardindex = Math.floor(cardindex);
     }
     let cardspace = document.querySelector("#cardspace");
     cardspace.removeChild(cardspace.lastChild);
     writemessage();
     
   }
   previndex = cardindex;

    return cardindex;
}