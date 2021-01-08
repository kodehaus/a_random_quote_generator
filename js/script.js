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
let quotes =[];
/*
  quotes.push({quotation: 'hey lose the day in expectation of the night, and the night in fear of the dawn.', source: 'Seneca', citation: '', year: '' });
  quotes.push({quotation: 'Just keep in mind: the more we value things outside our control, the less control we have. ', source: 'Epictetus',citation: '', year: '' });
  quotes.push({quotation: 'It does not matter what you bear, but how you bear it. ', source: 'Seneca',citation: '', year: '' });
  quotes.push({quotation: 'Learn to be indifferent to what makes no difference.', source: ' Marcus Aurelius',citation: '', year: '' });
  quotes.push({quotation: 'The more you seek the uncomfortable, the more you will become comfortable. ', source: 'Conor McGregor',citation: '', year: '' });
  quotes.push({quotation: 'Everyone has a plan \'till they get punched in the mouth.', source: 'Mike Tyson',citation: '', year: '' });
  quotes.push({quotation: 'Behind every great man is a woman rolling her eyes.', source: 'Jim Carey',citation: '', year: '' });
  quotes.push({quotation: 'Any man can learn anything he will, but no man can teach except to those who want to learn', source: 'Henry Ford',citation: '01/01/1924', year: 'Ford News' });
  quotes.push({quotation: 'Education is preeminently a matter of quality, not amount', source: 'Henry Ford',citation: '01/01/1924', year: 'Ford News' });
  */
 const quoteStringArr = [
   //array pattern ['QUOTE','SOURCE','CITATION','YEAR']
   ['hey lose the day in expectation of the night, and the night in fear of the dawn.', 'Seneca', '', ''],
   ['Just keep in mind: the more we value things outside our control, the less control we have.', 'Epictetus', '', ''],
   ['It does not matter what you bear, but how you bear it. ', 'Seneca','', ''],
   ['Learn to be indifferent to what makes no difference.', 'Marcus Aurelius','', ''],
   ['The more you seek the uncomfortable, the more you will become comfortable. ', 'Conor McGregor','', ''],
   ['Everyone has a plan \'till they get punched in the mouth.', 'Mike Tyson','', ''],
   ['Behind every great man is a woman rolling her eyes.', 'Jim Carey','', ''],
   ['Any man can learn anything he will, but no man can teach except to those who want to learn', 'Henry Ford', 'Ford News','1924'],
   ['Education is preeminently a matter of quality, not amount', 'Henry Ford', 'Ford News','1924']
 ];


 //add  empty quote objects
 for(let i = 0; i < quoteStringArr.length; i++){
  quotes.push(createQuoteObject());
 }

 //populate quote objects
 for(let i = 0; i < quoteStringArr.length; i++){
   //populate the objects with values from the multidimensional arrays
  quotes[i].quotation = quoteStringArr[i][0];
  quotes[i].source = quoteStringArr[i][1];

  //ensure the field has a valid value otherwise it should remain undefined
  if(quoteStringArr[i][2].length >= 3){
    quotes[i].citation = quoteStringArr[i][2];
  }
    //ensure the field has a valid value otherwise it should remain undefined
  if(quoteStringArr[i][3].length >= 4){
    quotes[i].year = quoteStringArr[i][3];
  }
 }

//reusable code to create empty or populated objects
function createQuoteObject(quotation, source, citation, year){
  let newQuotationObject = {};
  newQuotationObject.quotation = quotation;
  newQuotationObject.source = source;
  newQuotationObject.citation = citation;
  newQuotationObject.year = year;
  return newQuotationObject;
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  const randomQuoteNumber = Math.floor((Math.random() * quotes.length-1)+1);
  return quotes[randomQuoteNumber];
}


/***
 * `printQuote` function
***/
function printQuote(){
  const quote = getRandomQuote();
  let html = `
        <p class="quote"> ${quote.quotation}</p>
        <p class="source"> ${quote.source} `;
    if(quote.citation){
      html += `
           <span class="citation">${quote.citation}</span>`;
    }
    if(quote.year){
      html += `
            <span class="year">${quote.year}</span>`;
    }
   html + "</p>";

   return document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);