import { userDefinedEvents } from './store';

const post = ({ text, tag = 'Other' }) => userDefinedEvents.push({ text, tag });

export default post;
