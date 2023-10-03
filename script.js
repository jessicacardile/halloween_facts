//Array with Halloween Facts.
const funFacts = [
    "Halloween roots lead back to the Celtic celebration of Samhain, 'Summer's End'.", "In medieval times trick or treats took place in Scotland and Ireland with and was knows as 'guising'.", "In the 18th century, women threw apple peels over their shoulders, hoping to see the initials of their future love.", "In traditional Samhain celebrations, the Celts' masks were made from animal skins and other parts of dead animals to ward off evil spirits.", "Trick-or-treating took a back seat during World War II as sugar rationing meant sweet treats were hard to come by.", "Full moons at Halloween are very rare! They happen approximately every 19 years.", "Halloween coincides with the Day of The Dead, a traditional celebration in Latin America", "Black cats are considered the perfect companion to traditional witches and the medieval belief that witches could transform into black cats at will. The witch and black cat symbolise Halloween.", "Traditional bonfires contained bones! Original Celtic bonfires were more aptly named 'bone fires' as the Celts threw animal bones into the flames to ward off those evil spirits again.", "There is an official phobia of Halloween, 'Samhainophobia'"];

function newQuote() {
    //Randomise phrase choice
    const randomNumber = Math.floor(Math.random() * (funFacts.length));
    //Phrase gets shown in box
    document.getElementById('randomBox').innerHTML = funFacts[randomNumber];
}



