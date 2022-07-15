/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * Represents an array of quotes
 ***/
let quotes = [];
quotes.push({
  quote: 'You are a sad, strange little man, and you have my pity.',
  source: 'Buzz Lightyear',
  citation: 'Toy Story',
  year: '1995',
  tags: 'humor'
}, {
  quote: 'Before you marry a person you should first make them use a computer with slow Internet to see who they really are.',
  source: 'Will Ferrell',
  citation: 'Twitter',
  year: '2013',
  tags: 'satire'
}, {
  quote: 'Don’t put your wand there, boy! … Better wizards than you have lost buttocks, you know.',
  source: 'J.K. Rowling',
  citation: 'Harry Potter and the Order of the Phoenix',
  year: '2003',
  tags: 'fantasy'
}, {
  quote: 'My friends need to be punished',
  source: 'Lilo',
  citation: 'Lilo & Stitch',
  year: '2002',
  tags: 'absurdity'
}, {
  quote: 'Banana',
  source: 'Stuart',
  citation: 'Minions',
  year: '2015',
  tags: 'comedy'
}, );

/***
 * Creates a random number, and uses this number to return a random quote from quotes array
 ***/
function getRandomQuote(){
  let randNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randNum];
}

/***
 * Builds a string of HTML and quote properties.
 * Uses string to diplay random quote in browser.
 ***/
function printQuote(){
  let randQuote = getRandomQuote();
  let quoteString = `<p class='quote'>${randQuote.quote}</p>
                     <p class='source'>${randQuote.source}`;
  if('citation' in randQuote){
    quoteString += `<span class='citation'>${randQuote.citation}</span>`;
  }
  if('year' in randQuote){
    quoteString += `<span class='year'> ${randQuote.year}</span>`;
  }
  if('tags' in randQuote){
    quoteString += `<span>, ${randQuote.tags}`;
  }
  quoteString += '</p>'
  document.getElementById('quote-box').innerHTML = quoteString;
  backgroundColor();
}

/***
 * Updates body background to random color when random quote is generated
 ***/
function backgroundColor(){
  let arrColor = ['#F8B195','#F67280','#C06C84','#6C5B7B','#355C7D'];
  let randColor = Math.floor(Math.random() * (arrColor.length));
  return document.body.style.backgroundColor = arrColor[randColor];
}

/***
 * Auto-refreshes quotes at regular 10 second intervals
 ***/
const interval = setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
