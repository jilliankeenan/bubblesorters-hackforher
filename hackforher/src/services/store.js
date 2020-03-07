import { womenInTechQuotes } from './data'

export function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getDateInFebruary = () => {
    var february = new Date("2020-02-01T00:00:00.000Z");

    february.setDate(randomIntFromInterval(1, 29));
    february.setUTCHours(randomIntFromInterval(6, 18));
    february.setUTCMinutes(randomIntFromInterval(0, 60));
    february.setUTCSeconds(randomIntFromInterval(0, 60));

    return february;
}

export const slackData = (() => {
    const names = ['John', 'Sarah', 'Connor']
    const thingsSaid = ['I love you', 'Be with me', 'Poop']
    const data = [];

    for (let index = 0; index < 3; index++) {
        const slackEntry = {
            whatTheySaid: thingsSaid[index],
            name: names[index],
            image: 'path/to/image',
            dataGiven: getDateInFebruary().toISOString()
        };
        data.push(slackEntry);
    }

    return data;
})();

export const githubData = (() => {
    const topRepos = (() => {
        const repoNames = ['Product 1', 'Product 2', 'Product 3'];
        return repoNames.map((currentName, index) => ({
            name: repoNames[index],
            commitTotal: Math.floor(Math.random() * 30) + 1
        }))
    })();

    const data = {
        contributions: {
            prTotal: Math.floor(Math.random() * 10),
            commitTotal: Math.floor(Math.random() * 100) + 1,
            linesWrittenTotal: Math.floor(Math.random() * 400) + 1,
            reviewsTotal: Math.floor(Math.random() * 15) + 1,
            topRepos: topRepos
        }
    };
    return data;
})();

export const jiraData = (() => {
    const bugTitles = ['Bug 1', 'Bug 2', 'Bug 3'];
    const featureTitles = ['Feature 1', 'Feature 2', 'Feature 3'];

    return {
        tickets: {
            bugs: bugTitles.map(title => ({
                title: title,
                date: getDateInFebruary()
            })),
            features: featureTitles.map(title => ({
                title: title,
                date: getDateInFebruary(),
                points: Math.floor(Math.random() * 100) + 1
            }))
        }
    }
})

export const userDefinedEvents = [];

export default {
    allData: {
        slackData,
        githubData,
        jiraData,
        userDefinedEvents
    },
    womenInTechQuotes
};