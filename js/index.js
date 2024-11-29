var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: "― Marilyn Monroe"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author: "― Bernard M. Baruch"
    },
    {
        quote: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
        author: "― William W. Purkey"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“Logic will get you from A to Z; imagination will get you everywhere.”",
        author: "― Albert Einstein"
    },
    {
        quote: "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”",
        author: "― Bob Marley"
    },
    {
        quote: "“Folks are usually about as happy as they make their minds up to be.”",
        author: "― Abraham Lincoln"
    },
    {
        quote: "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”",
        author: "― Marilyn Monroe"
    },
    {
        quote: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author: "― Mark Twain"
    },
    {
        quote: "“We are all in the gutter, but some of us are looking at the stars.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“Life is what happens to us while we are making other plans.”",
        author: "― Allen Saunders"
    },
    {
        quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
        author: "― Thomas A. Edison"
    },
    {
        quote: "“A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        author: "― Eleanor Roosevelt"
    },
    {
        quote: "“I solemnly swear that I am up to no good.”",
        author: "― J.K. Rowling, Harry Potter and the Prisoner of Azkaban"
    },
    {
        quote: "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”",
        author: "― George R.R. Martin, A Dance with Dragons"
    },
    {
        quote: "“A day without sunshine is like, you know, night.”",
        author: "― Steve Martin"
    },
    {
        quote: "“Never put off till tomorrow what may be done day after tomorrow just as well.”",
        author: "― Mark Twain"
    },
    {
        quote: "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”",
        author: "― Lao Tzu"
    },
    {
        quote: "“That which does not kill us makes us stronger.”",
        author: "― Friedrich Nietzsche"
    },
    {
        quote: "“It is never too late to be what you might have been.”",
        author: "― George Eliot"
    },
    {
        quote: "“For every minute you are angry you lose sixty seconds of happiness.”",
        author: "― Ralph Waldo Emerson"
    },
    {
        quote: "“If you judge people, you have no time to love them.”",
        author: "― Mother Teresa"
    },
    {
        quote: "“There is no greater agony than bearing an untold story inside you.”",
        author: "― Maya Angelou, I Know Why the Caged Bird Sings"
    },
    {
        quote: "“Everything you can imagine is real.”",
        author: "― Pablo Picasso"
    },
    {
        quote: " “Mafish fayda” ",
        author: "― Saad Zaghloul"
    },

]

var newQuote;
var lastQuote;
var sumQuotes = [];
function getQuote() {
    if (sumQuotes.length == quotes.length) {
        sumQuotes = []
    }
    do {
        newQuote = Math.floor(Math.random() * quotes.length);
    } while (newQuote == lastQuote || sumQuotes.includes(newQuote));
    lastQuote = newQuote;
    sumQuotes.push(newQuote);
    document.getElementById("quote").innerHTML = quotes[newQuote].quote;
    document.getElementById("author").innerHTML = quotes[newQuote].author;

}

