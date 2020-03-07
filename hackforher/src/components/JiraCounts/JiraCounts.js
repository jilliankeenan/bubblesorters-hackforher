import React from 'react';
import './jiracounts.scss';
import SecondaryHeading from '../SecondaryHeading';
import Heading from '../Heading';
import CountUp from 'react-countup';

const JiraCounts = ({ children }) => (
	<div className="jiracount-container">
		<Heading>
			<div className="counter-container">
				<span>🎉</span>

				<CountUp end={90} duration={10} />

				<span>🎉</span>
			</div>
		</Heading>
		<SecondaryHeading>Number of Points Completed!</SecondaryHeading>
	</div>
);

export default JiraCounts;
