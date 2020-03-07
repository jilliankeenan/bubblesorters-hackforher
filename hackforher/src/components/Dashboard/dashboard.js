import React, { Component } from "react"
import SlackKarma from "../SlackKarma/slackKarma";
import Jira from "../Jira/jira";
import GitHubContibutions from "../GitHubContibutions/github";
import Image1 from '../../assets/images/image.png'
import Image2 from '../../assets/images/image1.jpg'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css";



class Dashboard extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <ScrollAnimation animateIn='fadeIn'>
                    <SlackKarma data={data.allData.slackData} />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                    <GitHubContibutions data={data.allData.githubData} />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                    <Jira data={data.allData.jiraData}  ></Jira>
                </ScrollAnimation>
            </>
        )
    }
}

export default Dashboard
