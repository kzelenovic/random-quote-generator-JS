/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'Long Walk to Freedom',
    year: 1995
  },
  {
    quote: 'I only hope that we never lose sight of one thing — that it all started with a mouse.',
    source: 'Walt Disney',
    citation: 'What is Disneyland',
    year: 1954
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: 'Tomorrow Is Now',
    year: 1963
  },
  {
    quote: 'I\'m still off hamburgers.',
    source: 'Oprah Winfrey',
    citation: 'Oprah: \'Free speech rocks\'',
    year: 1998
  },
  {
    quote: 'Imagination is a force that can actually manifest a reality.',
    source: 'James Cameron',
    citation: 'TED conference',
    year: 2010
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length )
  console.log(randomNumber);
  return arr[randomNumber];
}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let htmlString = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString += `<span class="citation">${randomQuote.year}</span>`;
  }
  htmlString += `</p>`;
  return document.getElementById('quote-box').innerHTML = htmlString;
}

console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);