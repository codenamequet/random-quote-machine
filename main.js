//Store all quotes in variables quote1, quote2, ...
//Put those quotes in a variable an array allQuotes - any new quotes can be pushed to the end of the array
//create a function with a for loop that randomly selects a quote from the allQuotes array when the button is pressed

//might be able to make all the variables an object with a background color or album cover associated with the background of each quote

// var allQuotes = ["Difficult takes a day, impossible takes a week", "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.", "Chains is cool to cop, but more important is lawyer fees."]

(function () {
    var allQuotes = [
    {
    text: '"Difficult takes a day, impossible takes a week"',
    album: "Late Registration",
    img: "url('https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png')"
    },
    {
    text: '"A loss ain\'t a loss it\'s a lesson, appreciate the pain it\'s a blessing."',
    album: "4:44",
    img: "url('https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png')"
    },
    {
    text: '"Chains is cool to cop, but more important is lawyer fees."',
    album: "Reasonable Doubt",
    img: "url('https://upload.wikimedia.org/wikipedia/en/f/f5/Reasonable_Doubt_New.jpg')",
    }, 
    {
    text: '"We call the cops the A-Team, because they hop out the back of vans and spray things"',
    album: "In My Lifetime, Vol.1",
    img: "url('https://upload.wikimedia.org/wikipedia/en/c/c9/Jayz_inmylifetime.jpg')",
    }
]

var changeQuote = document.getElementById('change-quote')
changeQuote.addEventListener('click', function () {
    var changeQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    document.getElementsByClassName('display-quote')[0].textContent = changeQuote.text
    document.getElementsByClassName('display-quote')[0].style.backgroundImage = changeQuote.img
})
})()

document.getElementsByClassName("display-quote")[0].textContent = 'Click the "Change Quote" button below to view quotes'
