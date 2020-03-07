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
    const names = ['Sinead', 'Sarah', 'Elaine']
    const thingsSaid = ['Thanks for helping with my last ticket.', 'You did a great talk yesterday, at the Go meetup', 'Good job on that React ticket!']
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
        const repoNames = ['@puppet/design-system', '@puppet/remediate-discovery', 'ui-react-components'];
        return repoNames.map((currentName, index) => ({
            name: repoNames[index],
            commitTotal: randomIntFromInterval(1, 60)
        }))
    })();

    const data = {
        contributions: {
            prTotal: randomIntFromInterval(1, 10),
            commitTotal: randomIntFromInterval(1, 100),
            linesWrittenTotal: randomIntFromInterval(50, 1000),
            reviewsTotal: randomIntFromInterval(1, 15),
            topRepos: topRepos
        }
    };
    return data;
})();

export const jiraData = (() => {
    const bugTitles = ['BUG-143: Modal Broken MacOS users', 'BUG-198: Chrome Specific UI problem', 'BUG-874: API Payload returning incorrect JSON'];
    const featureTitles = ['JIRA-154: Puppet Radio Button', 'JIRA-190: Integration with GraphQL API', 'JIRA-156: Docker Release setup'];

    return {
        tickets: {
            bugs: bugTitles.map(title => ({
                title: title,
                date: getDateInFebruary()
            })),
            features: featureTitles.map(title => ({
                title: title,
                date: getDateInFebruary(),
                points: randomIntFromInterval(1, 100)
            }))
        }
    }
})();

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
