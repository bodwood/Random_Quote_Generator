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
let quotes = [];
quotes.push({
  quote: 'You are a sad, strange little man, and you have my pity.',
  source: 'Buzz Lightyear',
  citation: 'Toy Story',
  year: '1995'
}, {
  quote: 'Before you marry a person you should first make them use a computer with slow Internet to see who they really are.',
  source: 'Will Ferrell',
  citation: 'Twitter',
  year: '2013'
}, {
  quote: 'Don’t put your wand there, boy! … Better wizards than you have lost buttocks, you know.',
  source: 'J.K. Rowling',
  citation: 'Harry Potter and the Order of the Phoenix',
  year: '2003'
}, {
  quote: 'My friends need to be punished',
  source: 'Lilo',
  citation: 'Lilo & Stitch',
  year: '2002'
}, {
  quote: 'Banana',
  source: 'Stuart',
  citation: 'Minions',
  year: '2015'
}, );

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(){
  let randNum = 0;
  randNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randNum];
}

/***
 * `printQuote` function
 ***/
function printQuote(){
  let randQuote = getRandomQuote();
  let quoteString = `<p class='quote'>${randQuote.quote}</p>
                     <p class='source'>${randQuote.source}`;
  if('citation' in randQuote){
    quoteString += `<span class='citation'>${randQuote.citation}</span>`;
  }
  if('year' in randQuote){
    quoteString += `<span class='year'> ${randQuote.year}`;
  }
  quoteString += '</p>'
  document.getElementById('quote-box').innerHTML = quoteString;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
