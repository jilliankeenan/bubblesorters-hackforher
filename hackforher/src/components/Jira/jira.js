import React, { Component } from "react"
import { Card } from '../Card'
import styled from 'styled-components';
import HighlyGenericTitle from '../HighlyGenericTitle'
import DashboardNumber from '../DashboardNumber'
import JiraIcon from '../SVG/jira'
import WrapperIcon from '../Wrapper';
import './jira.scss';
import Chart from '../Chart';

const LineItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

const Wrapper = styled.div`
    background: #2684ff;
    padding: 2rem;
`;

const WOrds = styled.div`
	display: flex;

`;

const Jira = ({ data }) => (
	<Wrapper>
		<WrapperIcon>
			<JiraIcon style={{ width: 100, height: 100 }} />
		</WrapperIcon>
		<div className="jira-container">

			<Card width='500px'>
				<Card noShadow>
					<HighlyGenericTitle>Top Features</HighlyGenericTitle>
					{data.tickets.features.map(({ title, points }, index) => (
						<LineItem>
							<p>{`${index + 1}. ${title}`}</p>
							<p>{points} points</p>
						</LineItem>
					))}
				</Card>
			</Card>
			<Card width='100%'>
				<Card isFlex >
					<Card noShadow>
						<HighlyGenericTitle>Bugs</HighlyGenericTitle>
						<DashboardNumber>{data.tickets.bugs.length}</DashboardNumber>
					</Card>
					<Card noShadow>
						<HighlyGenericTitle>Features</HighlyGenericTitle>
						<DashboardNumber>{data.tickets.features.length}</DashboardNumber>
					</Card>
				</Card>
				<div style={{width: '100%'}}>
				<HighlyGenericTitle style={{ textAlign: 'center' }}>What kind of tickets did you complete?</HighlyGenericTitle>
				<Chart />
				</div>
			</Card>
		</div>
	</Wrapper>

);

export default Jira;
