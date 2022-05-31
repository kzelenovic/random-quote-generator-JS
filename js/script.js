/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * randomColorNum function
 * generates a random number between 1 and 255 that will be used as part of the RBG values for the body background color
***/

const randomColorNum = function () {
  return Math.floor(Math.random() * 256);
}

// console.log(randomColorNum());

/*** 
 * randomColorNum function
 * provides an RGB string that can be used in CSS to get a color. uses a number as a parameter.
 * i used randomColorNum to provide it numbers at the end of the code
***/

function randomRGB(number) {
  const color = `rgb( ${number()}, ${number()}, ${number()} )`;
  return color;
}

// console.log(randomRGB(randomColorNum));
/*** 
 * `quotes` array 
 * an array with 5 objects that contain strings and a number. each object is a quote that will be randomly printed onto the site
***/

const quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'Long Walk to Freedom',
    year: 1995,
    tag: 'inspirational'
  },
  {
    quote: 'I only hope that we never lose sight of one thing — that it all started with a mouse.',
    source: 'Walt Disney',
    citation: 'What is Disneyland',
    year: 1954,
    tag: 'business'
  },
  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    source: 'Eleanor Roosevelt',
    citation: 'Tomorrow Is Now',
    year: 1963,
    tag: 'inspirational'
  },
  {
    quote: 'I\'m still off hamburgers.',
    source: 'Oprah Winfrey',
    citation: 'Oprah: \'Free speech rocks\'',
    year: 1998,
    tag: 'humor'
  },
  {
    quote: 'Imagination is a force that can actually manifest a reality.',
    source: 'James Cameron',
    citation: 'TED conference',
    year: 2010,
    tag: 'inspirational'
  }
];

// console.log(quotes);

/***
 * `getRandomQuote` function
 * function that takes an array and returns a random object within the array.
 * this is done with generating a random number between 0 and the length of the array.
 * that random number then 
***/

function getRandomQuote(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length )
  console.log(randomNumber);
  return arr[randomNumber];
}

// console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
 * this function will print the random quote from the quotes array to the page.
 * it calls upon the randomQuote function.
 * it uses conditionals to concatenate properties such as citation, year, etc.
 * it returns the htmlString containing all of the applicable html tags and values.
***/

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let htmlString = `<style>body{background-color: ${randomRGB(randomColorNum)}}</style><p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  if (randomQuote.tag) {
    htmlString += `<span class="citation">${randomQuote.tag}</span>`;
  }
  htmlString += `</p>`;
  return document.getElementById('quote-box').innerHTML = htmlString;
}

printQuote();

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);