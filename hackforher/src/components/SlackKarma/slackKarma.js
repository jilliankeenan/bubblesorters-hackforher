import React, { Component } from 'react';
import Logo from '../../assets/images/image.png'
import './slackKarma.scss';

class SlackKarma extends Component {
	render() {
		return (
			<div className="karma-container">
				<div className="karma-image-container">
                <img src={Logo} width="150" height="150"></img>
				</div>
				<div className="karma-details-container">
					<div className="name-container">{'name'}</div>
                    <div className="message-container">{'message'}</div>
					<div className="date-container">{'date'}</div>
				</div>
			</div>
		);
	}
}

export default SlackKarma;
