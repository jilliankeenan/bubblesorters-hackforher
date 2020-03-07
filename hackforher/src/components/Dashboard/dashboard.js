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
                <SlackKarma data={data.allData.slackData} />

                <div>
                    <GitHubContibutions data={data.allData.githubData} />
                </div>

                <div>
                    <Jira></Jira>
                </div>
            </div>
        )
    }
}

export default Dashboard
