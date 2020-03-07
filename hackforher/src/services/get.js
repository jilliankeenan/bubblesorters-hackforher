import allData from './store';

export const getQuote = () => {
    return fetch('https://quotes.rest/qod?category=inspire&language=en')
        .then(response => response.json())
        .then(quoteResponse => {
            const quoteData = quoteResponse.contents.quotes;
            return {
                quote: quoteData.quote,
                author: quoteData.author,
                backgroundImage: quoteData.background
            };
        })
        .catch(error => {
            console.log(error);
        });
}

export const getRandomQuote = () => {
    
}

export const getAllData = () => {
    return allData;
}