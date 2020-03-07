import React from 'react';
import Button from '../Button';

import './evententry.scss';

const EventEntry = ({ stringLink }) => (
	<div className="evententry-container">
		<div>
			<input />
			<select />
		</div>
		<div>
			<Button>Add Event</Button>
		</div>
	</div>
);

export default EventEntry;
