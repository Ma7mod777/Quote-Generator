
var quotes = [
 one ={qtext: "Be yourself; everyone else is already taken", qman: "― Oscar Wilde"},
 two ={qtext: "So many books, so little time.", qman: "― Frank Zappa"},
 three ={qtext: "A room without books is like a body without a soul.", qman: "― Oscar Wilde"},
 four ={qtext: "Be yourself; everyone else is already taken", qman: "― Marcus Tullius Cicero"},
 five ={qtext: "You only live once, but if you do it right, once is enough.", qman: "― Mae West"},
 six ={qtext: "Be the change that you wish to see in the world.", qman: "― Mahatma Gandhi"},
 seven ={qtext: "In three words I can sum up everything I've learned about life: it goes on.", qman: "― Robert Frost"},
 eight ={qtext: "If you tell the truth, you don't have to remember anything.", qman: "― Mark Twain"},
 nine ={qtext: "A friend is someone who knows all about you and still loves you.", qman: "― Elbert Hubbard"},
 ten ={qtext: "It is better to be hated for what you are than to be loved for what you are not.", qman: "― Andre Gide, Autumn Leaves"},



]

var randomIntgr;
var parentContainer;
function quoteGenerator(){


while(randomIntgr==parentContainer){
    randomIntgr= Math.floor(Math.random()*(quotes.length));}

parentContainer = randomIntgr;
console.log(quotes[randomIntgr].qtext);

document.getElementById("my-quote").innerHTML= `<p>"`+quotes[randomIntgr].qtext+`"</p>`;
document.getElementById("my-qman").innerHTML= `<p>"` +quotes[randomIntgr].qman+`"</p>`;


};


