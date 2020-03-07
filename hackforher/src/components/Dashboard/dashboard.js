import React, { Component } from "react"
import SlackKarma from "../SlackKarma/slackKarma";
import Jira from "../Jira/jira";
import GitHubContibutions from "../GitHubContibutions/github";
import Image1 from '../../assets/images/image.png'
import Image2 from '../../assets/images/image1.jpg'


class Dashboard extends Component {
    render() {
        return (
        <div>
            <div>
                textinput
            </div>

            <div className="slackKarma-container">
                <h1>slackKarma</h1>
                <SlackKarma imageKarma={Image1}/>
                <SlackKarma imageKarma={Image2}/>
            </div>

            <div>
                GitHub Contibutions
                <GitHubContibutions/>
            </div>

            <div>
                <Jira></Jira>
            </div>
        </div>
        )
    }
}

export default Dashboard
