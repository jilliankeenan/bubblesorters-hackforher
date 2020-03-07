import React, { Component } from "react"
import SlackKarma from "../SlackKarma/slackKarma";

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
                jira
            </div>
        </div>
        )
    }
}

export default Dashboard
