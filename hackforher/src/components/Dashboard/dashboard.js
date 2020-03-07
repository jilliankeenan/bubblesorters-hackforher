import React, { Component } from "react"
import SlackKarma from "../SlackKarma/slackKarma";
import Jira from "../Jira/jira";
import GitHubContibutions from "../GitHubContibutions/github";
import Image1 from '../../assets/images/image.png'
import Image2 from '../../assets/images/image1.jpg'


class Dashboard extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="slackKarma-container">
                    <h1>slackKarma</h1>
                    <SlackKarma imageKarma={Image1} />
                    <SlackKarma imageKarma={Image2} />
                </div>

                <div>
                    <GitHubContibutions data={data.allData.githubData} />
                </div>

                <div>
                    <Jira data={data.allData.jiraData}  ></Jira>
                </div>
            </div>
        )
    }
}

export default Dashboard
