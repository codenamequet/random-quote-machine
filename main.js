//Store all quotes in variables quote1, quote2, ...
//Put those quotes in a variable an array allQuotes - any new quotes can be pushed to the end of the array
//create a function with a for loop that randomly selects a quote from the allQuotes array when the button is pressed

//might be able to make all the variables an object with a background color or album cover associated with the background of each quote

// var allQuotes = ["Difficult takes a day, impossible takes a week", "A loss ain't a loss it's a lesson, appreciate the pain it's a blessing.", "Chains is cool to cop, but more important is lawyer fees."]

(function () {
    var allQuotes = [
    {
    text: '"Difficult takes a day, impossible takes a week"',
    artist: 'Jay-Z',
    song: 'Diamons Are Forever',
    album: 'Late Registration',
    img: "url('http://images.genius.com/20be4a5ccc57daf3577b7e0d12f092f8.1000x1000x1.jpg')"
    },
    {
    text: '"A loss ain\'t a loss it\'s a lesson, appreciate the pain it\'s a blessing."',
    artist: 'Jay-Z',
    song: 'Smile',
    album: '4:44',
    img: "url('https://upload.wikimedia.org/wikipedia/commons/a/ac/4-44_album_cover.png')"
    },
    {
    text: '"Chains is cool to cop, but more important is lawyer fees."',
    artist: 'Jay-Z',
    song: '',
    album: "Reasonable Doubt",
    img: "url('https://upload.wikimedia.org/wikipedia/en/f/f5/Reasonable_Doubt_New.jpg')",
    }, 
    {
    text: '"First my President was black, now my president is whack"',
    album: "Pressure",
    img: "url()",
    song: "American Dream",
    artist: "Young Jeezy",
    },
    {
    text: '"Some things you can\'t escape: death, taxes, and a race-ist (racist) society that make every nigga feel like a candidate, for a Trayvon kinda fate. Even when your crib sit on a lake, even when your plaques hang on a wall, even when the President jam your tape."',
    album: "4 Your Eyez Only",
    img: "url()",
    song: "Neighbors",
    artist: 'J. Cole'
    },
    {
    text: '"I been drinking more water and popping less pills, unless they vitamins cause nigga I’m tryna live"',
    album: "Double or Nothing",
    img: 'url()',
    song: 'In Tune',
    artist: 'Big Sean'
    },
    {
    text: '"Being happy is my goal, but greatness is my mission"',
    album: '',
    img: 'url()',
    song: 'I\'m alright',
    artist: 'Childish Gambino'
    },
    {
    text: '"Even the genious ask his questions"',
    album: 'x',
    img: 'url()',
    song: 'Me Against The World',
    artist: 'Tupac'
    },
    {
    text: '"Far from a Havard student, just had the balls to do it"',
    artist: 'Jay-Z',
    song: 'What More Can I Say',
    album: 'Black Album',
    img: 'url()',
    },
    {
    text: '"I learned that working with the negatives can make for better pictures"',
    artist: 'Drake',
    song: 'HYFR',
    album: 'Take Care',
    img: 'url()'   
    },
]

var changeQuote = document.getElementById('change-quote')
changeQuote.addEventListener('click', function () {
    var changeQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)]
    document.getElementsByClassName('display-quote')[0].innerHTML = changeQuote.text + "<br />" + "- " + changeQuote.artist
    document.getElementsByClassName('display-quote')[0].style.backgroundImage = changeQuote.img
})
})()

document.getElementsByClassName("display-quote")[0].textContent = 'Hip Hop Random Quote Machine'
