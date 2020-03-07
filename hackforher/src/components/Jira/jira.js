import React, { Component } from "react"
import { Card } from '../Card'
import styled from 'styled-components';
import HighlyGenericTitle from '../HighlyGenericTitle'
import DashboardNumber from '../DashboardNumber'
import JiraIcon from '../SVG/jira'
import './jira.scss'

const LineItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

const Wrapper = styled.div`
    background: #2684ff;
    padding: 2rem;
`;

const Jira = ({ data }) => (
	<Wrapper>
		<div style={{ backgroundColor: 'white', borderRadius: '50%', width: 210, height: 200 , padding: '0.8rem'}}>
			<JiraIcon style={{ width: 100, height: 100}} />
		</div>
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
			<Card width='100%' isFlex>
				<Card noShadow>
					<HighlyGenericTitle>Bugs</HighlyGenericTitle>
					<DashboardNumber>{data.tickets.bugs.length}</DashboardNumber>
				</Card>
			</Card>
		</div>
	</Wrapper>
	
);

export default Jira;
