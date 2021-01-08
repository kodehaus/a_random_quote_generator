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
//declare an empty quotes array
let quotes =[];

 // We need an origination source for the quote data
 const quoteStringArr = [
   //multi-dimensional inner array pattern ['QUOTE','SOURCE','CITATION','YEAR']
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


 //add  empty quote objects - matches the number of elements in the qquoteStringArr array
 for(let i = 0; i < quoteStringArr.length; i++){
  quotes.push(createQuoteObject());
 }

 //populate quote objects - matched the number of elements in the squoteStringArr array
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
    //create an empty object than add properties and values to the object
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
  //ensure the array length matches with the number of items in the array
  const randomQuoteNumber = Math.floor((Math.random() * quotes.length-1)+1);
  console.log('randomQuoteNumber: ' + randomQuoteNumber);
  return quotes[randomQuoteNumber];
}

const getRGBValue = (floor, ceiling) => Math.floor((Math.random() * (ceiling - floor)) + floor)+1;

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

    document.getElementById('quote-box').innerHTML = html; 
    changeBackgroundColor();
    changeQuoteFontColor();
}

function changeBackgroundColor(){
  document.body.style.backgroundColor = `rgb(${getRGBValue(0,100)}, ${getRGBValue(0,100)} ,${getRGBValue(0,100)})`;
}
function changeQuoteFontColor(){
  document.body.style.color = `rgb(${getRGBValue(155,255)}, ${getRGBValue(155,255)} ,${getRGBValue(155,255)})`;  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
