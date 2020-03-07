import React, { Component } from 'react';
import './slackKarma.scss';

class SlackKarma extends Component {
	render() {
		return (
			<div className="karma-container">
				<div className="karma-image-container">
                <img src={this.props.imageKarma} width="150" height="150"></img>
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
