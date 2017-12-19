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
    img: "url(http://www.xxlmag.com/files/2017/11/Jeezy-Pressure-Album-Cover-Full.jpeg)",
    song: "American Dream",
    artist: "Young Jeezy",
    },
    {
    text: '"Some things you can\'t escape: death, taxes, and a race-ist (racist) society that make every nigga feel like a candidate, for a Trayvon kinda fate. Even when your crib sit on a lake, even when your plaques hang on a wall, even when the President jam your tape."',
    album: "4 Your Eyez Only",
    img: "urlhttps://upload.wikimedia.org/wikipedia/en/b/bb/J._Cole_%E2%80%94_4_Your_Eyez_Only_album_cover.jpg)",
    song: "Neighbors",
    artist: 'J. Cole'
    },
    {
    text: '"I been drinking more water and popping less pills, unless they vitamins cause nigga I’m tryna live"',
    album: "Double or Nothing",
    img: 'url(http://www.rap-up.com/app/uploads/2017/12/double-or-nothing.jpg)',
    song: 'In Tune',
    artist: 'Big Sean'
    },
    {
    text: '"Being happy is my goal, but greatness is my mission"',
    album: 'Culdesac',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/e/ed/Culdesac_album_cover.jpg)',
    song: 'I\'m alright',
    artist: 'Childish Gambino'
    },
    {
    text: '"Even the genious ask his questions"',
    album: 'Me Against The World',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/3/3d/Meagainsttheworldcover.jpg)',
    song: 'Me Against The World',
    artist: 'Tupac'
    },
    {
    text: '"Far from a Havard student, just had the balls to do it"',
    artist: 'Jay-Z',
    song: 'What More Can I Say',
    album: 'Black Album',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/0/0e/Jay-Z_-_The_Black_Album.png)',
    },
    {
    text: '"I learned that working with the negatives can make for better pictures"',
    artist: 'Drake',
    song: 'HYFR',
    album: 'Take Care',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Drake_-_Take_Care_cover.jpg/220px-Drake_-_Take_Care_cover.jpg)'   
    },
    {
    text: '"Sky is the limit and you know you can have what you want, be what you want"',
    artist: 'Notorious B.I.G',
    song: 'Sky Is the Limit',
    album: 'Life After Death',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/1/1c/NotoriousB.I.G.LifeAfterDeath.jpg)'
    },
    {
    text: '"My word of advice to you is just relax. Just do what you gotta do"',
    artist: 'Dead Prez',
    song: 'Hip-Hop',
    album: 'Let\'s Get Free',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/9/99/DeadPrezLet%27sGetFree.jpg/220px-DeadPrezLet%27sGetFree.jpg)'
    },
    {
    text: '"Everything is everything. What is meant to be, will be"',
    artist: 'Lauryn Hill',
    song: 'Everything is Everything',
    album: 'The Miseducation of Lauren Hill',
    img: 'url(https://img.discogs.com/26mQhh59Tgk-hYiz28sBUHDayP8=/fit-in/600x598/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3719597-1468458485-7555.jpeg.jpg)'
    },
    {
    text: '"Don\'t cry, dry your eyes, never let up. Forgive but don\'t forget, girl, keep your head up."',
    artist: 'Tupac',
    song: 'Keep Ya Head Up',
    album: 'Strictly For My N.I.G.G.A.Z.',
    img: 'url(https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Strictly_4_My_N.I.G.G.A.Z.jpg/220px-Strictly_4_My_N.I.G.G.A.Z.jpg)'
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
