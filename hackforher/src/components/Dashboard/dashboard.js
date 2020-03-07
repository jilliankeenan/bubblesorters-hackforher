import React, { Component } from "react"
import SlackKarma from "../SlackKarma/slackKarma";
import Jira from "../Jira/jira";
class Dashboard extends Component {
    render() {
        return (
        <div>
            <div>
                textinput
            </div>

            <div>
                slackKarma
                <SlackKarma/>
            </div>

            <div>
                github
            </div>

            <div>
                <Jira></Jira>
            </div>
        </div>
        )
    }
}

export default Dashboard
