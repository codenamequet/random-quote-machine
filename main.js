//Store all quotes in variables quote1, quote2, ...
//Put those quotes in a variable an array allQuotes - any new quotes can be pushed to the end of the array
//create a function with a for loop that randomly selects a quote from the allQuotes array when the button is pressed

//might be able to make all the variables an object with a background color or album cover associated with the background of each quote

var allQuotes = [];

var quote1 = {
    quote: "Difficult takes a day, impossible takes a week",
    album: "Late Registration",
    displayQuote: function() {
        return "Difficult takes a day, impossible takes a week";
    }
};
var quote2 = {
    quote: "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.",
    album: "4:44"
};
var quote3 = {
    quote: "Chains is cool to cop, but more important is lawyer fees.",
    album: "Reasonable Doubt"
};

//push all variables containing quotes to allQuotes array here
allQuotes.push(quote1);
allQuotes.push(quote2);
allQuotes.push(quote3);

//randomly selects an index in allQuotes
var scramble = allQuotes[Math.floor(Math.random() * allQuotes.length)];
var newQuote = function() {
document.addEventListener("click", console.log(scramble))
}
newQuote();


//displays quote to html document
var displayQuote = function() {
    var showQuote = document.createElement("block-quote");
    document.getElementsByClassName("display-quote")[0].textContent = quote1.quote;
    document.getElementsByClassName("display-quote");
}

displayQuote();