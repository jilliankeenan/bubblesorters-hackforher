import React, { Component } from 'react';
import './slackKarma.scss';

import { Card } from '../Card'
import styled from 'styled-components';
import HighlyGenericTitle from '../HighlyGenericTitle'
import DashboardNumber from '../DashboardNumber'
import SlackIcon from '../SVG/slack';
import Image1 from '../../assets/images/image.png'
import Image2 from '../../assets/images/image1.jpg'
import Image3 from '../../assets/images/image3.jpg'
import Image4 from '../../assets/images/image4.jpg'
import WrapperIcon from '../Wrapper';

const images = [Image1, Image2, Image3, Image4];

const LineItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

const Wrapper = styled.div`
    background: #2eb67d;
    padding: 2rem;
`;

const SpeechBubble = styled.div`
background: #36c5f0;
color: white;
display: inline-block;
  font-size: 14px;
line-height: 4em;
margin-bottom: 1em;
  padding: 0 1em;
  position: relative;
  text-align: center;
  max-width: 100px;
    line-height: 2;
    padding: 1rem;
  vertical-align: top;
  border-radius: 1rem;
	  min-width: 7em;

	  &:after {
		border: 1em solid transparent;
		border-top-color: #36c5f0;
		content: '';
		margin-left: -1em;
		position: absolute;
			top: 100%;
			left: 50%;
		width: 0;
		height: 0;
	}
`;

const Image = styled.img`
	height: 100px;
	 width: 100px;
	 margin-top: 1rem;
	 border-radius: 50%;
`;

const PersonWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Slack = ({ data }) => {
	return (
		<Wrapper>
			<WrapperIcon>
				<SlackIcon style={{ width: 100, height: 100 }} />
			</WrapperIcon>
			<div className="karma-container">
				<Card width='100%' isFlex>
					{data.map(({ whatTheySaid, name, dateGiven }, index) => (
						<Card noShadow>
							<PersonWrapper>
								<SpeechBubble>
									{whatTheySaid}
								</SpeechBubble>
								<Image src={images[index]} />
								<HighlyGenericTitle isPadded>{name}</HighlyGenericTitle>
							</PersonWrapper>
						</Card>
					))}
					{/* <Card noShadow>
                        <HighlyGenericTitle>Pull Requests</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.prTotal}</DashboardNumber>
                    </Card>
                    <Card noShadow>
                        <HighlyGenericTitle>Lines of Code</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.linesWrittenTotal}</DashboardNumber>
                    </Card>
                    <Card noShadow>
                        <HighlyGenericTitle>Code Reviews</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.reviewsTotal}</DashboardNumber>
                    </Card> */}
				</Card>
			</div>
		</Wrapper>
	);
};

export default Slack
