let baseURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

let quoteContainer = document.querySelector('.quoteContainer');
let logo = document.getElementById('ronLogo');
logo.addEventListener('click', fetchQuote)

async function fetchQuote() {
    let response = await fetch(baseURL);
    let json = await response.json()
    displayQuote(json)

    let logoContainer = document.getElementById('genQuote');

    if(logoContainer.contains(logo)){
        logoContainer.removeChild(logo)
    } else {
        console.log('no logo to remove')
    }
}


let displayQuote = (json) => {
    console.log(json)

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `"${json[0]}"`;
    quote.style = 'font-family: pinewood; color: #3a2718';

    if(json[0].length >= 50 && json[0].length <= 150) {
        quote.style.fontSize = '5rem';
    } else if(json.length < 50) {
        quote.style.fontSize = '7rem';
    } else {
        quote.style.fontSize = '3.5rem'
    }

    let button = document.createElement('button');
    button.innerText = 'Another Please'; 
    button.className = 'reset';
    button.style = 'margin: 0; margin-top: 4em;'

    let quoteBy = document.createElement('p')
    quoteBy.id = 'quoteBy';
    quoteBy.innerText = '- Ron Swanson'
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718'

    quoteContainer.appendChild(quote);
    quoteContainer.appendChild(quoteBy);
    quoteContainer.appendChild(button);

    button.addEventListener('click', () => {
        quoteContainer.removeChild(quote);
        quoteContainer.removeChild(quoteBy);
        quoteContainer.removeChild(button);
        fetchQuote();
    })
}