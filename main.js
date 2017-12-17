//Store all quotes in variables quote1, quote2, ...
//Put those quotes in a variable an array allQuotes - any new quotes can be pushed to the end of the array
//create a function with a for loop that randomly selects a quote from the allQuotes array when the button is pressed

//might be able to make all the variables an object with a background color or album cover associated with the background of each quote

var allQuotes = ["Difficult takes a day, impossible takes a week", "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.", "Chains is cool to cop, but more important is lawyer fees."]
var allQuotes2 = []

    quote1 = {
    quote: "Difficult takes a day, impossible takes a week",
    // album: "Late Registration",
    }
    quote2 = {
    quote: "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.",
    // album: "4:44"
    }
    quote3 = {
    quote: "Chains is cool to cop, but more important is lawyer fees.",
    // album: "Reasonable Doubt"
    }


//push all variables containing quotes to allQuotes array here
// allQuotes2.push(quote1);
// allQuotes2.push(quote2);
// allQuotes2.push(quote3);

//randomly selects an index in allQuotes
function scramble() {
    // for (i = 0; i < allQuotes.length; i++) {
        let random = (Math.floor(Math.random() * allQuotes.length))
        let newQuote = allQuotes[random]
        console.log(allQuotes[random])
    // }
}
    
    let rando = (Math.floor(Math.random() * allQuotes.length))
    let jay = allQuotes[rando]


//displays quote to html document
// function displayQuote () {
//     var showQuote = document.createElement("block-quote")
//     document.getElementsByClassName("display-quote")[0].textContent = jay
// }

function displayQuote () {
    var newQuote = document.getElementById('change-quote')
    newQuote.addEventListener('click', function () {
        var showQuote = document.createElement("block-quote")
        document.getElementsByClassName("display-quote")[0].textContent = jay
        console.log(jay)
    })
}

displayQuote();
