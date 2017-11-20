//Store all quotes in variables quote1, quote2, ...
//Put those quotes in a variable an array allQuotes - any new quotes can be pushed to the end of the array
//create a function with a for loop that randomly selects a quote from the allQuotes array when the button is pressed

//might be able to make all the variables an object with a background color or album cover associated with the background of each quote

var allQuotes = [];
var quote1 = "Difficult takes a day, impossible takes a week";
var quote2 = "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.";
var quote3 = "Marcy me. Streets is my atery, the vein of my existence, I'm the Gotham City heart beat.";

//push all variables containing quotes to allQuotes array here
allQuotes.push(quote1);
allQuotes.push(quote2);
allQuotes.push(quote3);

//randomly selects an index in allQuotes
var random = allQuotes[Math.floor(Math.random() * allQuotes.length)];
var newQuote = document.getElementById("change-quote");
newQuote.onclick = random;
//function loops randomly loops through quotes after button is clicked.

var changeQuote = function(buttonPressed) {
    for(i = 0; i <= allQuotes.length; i) {
        return //random quote ;
    };
};

