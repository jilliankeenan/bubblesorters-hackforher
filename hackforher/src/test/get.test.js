import { getQuote, getRandomQuote, getAllData } from '../services/get'

test('Test get', () => {
    const quoteOfDay = getQuote();
    const randomQuote = getRandomQuote();
    const allData = getAllData();

    return quoteOfDay.then(result => {
        console.log(result);
        console.log(randomQuote);
        console.log(allData);

        expect(result).not.toBeNull();
        expect(randomQuote).not.toBeNull();
        expect(allData).not.toBeNull();
    });
});

    