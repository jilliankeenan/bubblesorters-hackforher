import { userDefinedEvents } from './store';

const post = ({ text, tag = 'Other' }) => userDefinedEvents = [
    ...userDefinedEvents,
    { text, tag }
];

export default post;
