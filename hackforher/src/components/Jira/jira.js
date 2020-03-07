import React from 'react';
import Chart from '../Chart';
import Heading from '../Heading';
import SecondaryHeading from '../SecondaryHeading';
import JiraCounts from '../JiraCounts';
import './jira.scss';

const Jira = ({ stringLink }) => (
	<div className="jira-container">
		<div className="donut-chart">
      <SecondaryHeading>What Repos have you commited to this month?</SecondaryHeading>
			<Chart />
		</div>
		<div>
			<div className="heading-container">
				<Heading>Jira Metrics</Heading>
			</div>
			<div className="jiracounter-container">
				<JiraCounts />
			</div>
		</div>
	</div>
);

export default Jira;
