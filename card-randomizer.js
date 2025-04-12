// let defines the variable, "this is what appears on the card"
// do not end an array with a comma
// end each command with a semicolon

//array, this is where you list cards
let cards = [
    "Drink some water",
    "Step outside for a moment",
    "Take a moment to stretch your body",
    "Tense your whole body. Relax it slowly. Take a breath.",
    "Pause everything, appreciate the quiet for a moment.",
    "Snack Break!",
    "Say everything you've been thinking out loud",
    "Close your eyes for five minutes, focus on breathing and check in on your body.",
    "Move your body",
    "Deep breath. Take up space. You belong there.",
    "Tidy up one thing",
    "Ignore the big picture. Focus on something small.",
    "Find a time today to dance",
    "Play your favorite song",
    "Find a time today to sing along to a nostalgic song",
    "What is the biggest animal you could take in a fight? Why?",
    "Hug something as soon as possible. Person. Pillow. Suffed toy. Pet. Tree. ANYTHING!",
    "Indulge in your guilty pleasure today",
    "Find a plant. Tell it what you are thinking about.",
    "Scribble. Then make it into a dumb little creature. Name it.",
    "Listen to a genre of music you've never given a chance. Rate it out of 10.",
    "Write a review for a place you LOVED recently. Be very enthusiastic",
    "What are 3 things you are grateful for?",
    "What is something you did recently that you are proud of?",
    "What is something that you love about yourself?",
    "Find a picture of something that inspires you",
    "What would make today better?",
    "What is something you learned today?",
    "Make a mind map of something you are working on. Write down everything.",
    "Draw a self portrait. It doesn't have to be literal.",
    "Find a song that represents your mood today. Blast it.",
    "Write one line that summarizes your week. One line that summarizes your day. One line that summarizes your hour.",
    "Think of a dream or goal you have never shared with anybody. Write it down.",
    "Be less critical of yourself. Name 3 things you have been doing well.",
    "Write a rant about something bothering you. Throw it away.",
    "Go outside and listen to the sounds around you. Feel the breeze, hear the small things.",
    "Forgive yourself, be kind, you are enough.",
    "Imagine a peaceful place, breathe there for a moment.",
    "Find somewhere you can walk ten paces. Walk slowly, feel your body, be aware of how your body settles and balance flows.",
    "Find a basic item you use everyday. Look at it, hold it in your hands, how does it move? work? Appreciate its presence in your life.",
    "Name five things you can see. Four you can feel. Three you can hear. Two you can smell. One you can taste.",
    "Compliment somebody",
    "Do a random act of kindness",
    "Tell your biggest supporter a reason you appreciate them.",
    "Call somebody you have not spoken to in a while. Ask them how they are doing. Tell them how you are doing.",
    "Text a friend. Ask them something you do not know about them. What is… their favorite smell?",
    "Get a music recommendation from somebody",
    "Get a book recommendation from somebody",
    "Make plans with a friend",
    "Think of somebody. Text them.",
    "Accept advice from somebody you respect",
    "Say: I am worthy of love and respect",
    "Say: I am enough, just as I am.",
    "Say: I am a valuable and unique individual",
    "Say: I have made progress and I am proud of it",
    "Say: I will allow myself to rest",
    "Say: I am growing at my own pace",
    "Say: I am allowed to ask for what I need",
    "Say: It is okay to take things one step at a time",
    "Say: It is enough to do my best",
    "Say: I will be present",
    "Say: I deserve time for myself",
    "https://youtu.be/wTqsV3q7rRU?si=Fnem2_kR6QwKly0N",
    "https://youtu.be/HtBuNU7XhQo?si=6vYhZ005KN_62w3_",
    "https://youtu.be/HihOMkne5Js?si=F4yInPb85q0VWU3H",
    "https://youtu.be/J---aiyznGQ?si=fIPnLWGiBR1jtR6q",
    "https://youtu.be/l-TJm7HkzkQ?si=iA1X432zr5yivGTV",
    "https://www.onemillionpats.com/toble/",
    "https://callumprentice.github.io/apps/planet_compare/",
    "https://screamintothevoid.com/",
    "https://jspaint.app/#local:73a77cd1b3cdf8"
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