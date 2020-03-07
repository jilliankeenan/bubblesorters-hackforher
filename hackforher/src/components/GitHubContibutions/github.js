import React, { Component } from "react"
import './github.scss'

class github extends Component {
    render() {
        return (
        
        <div className="GitHub-Container">
            <div className="TopRepoContrib-Container">
                Top Repository Contributions
                <div className="TopRepoDetails-Container">
                    1.
                    2.
                    3.
                    4.
                    5.
                </div>
            </div>
            
            <div className="NumberStat-Container">
                <div className="PR-Container">
                    <div className="PRTitle-Container">
                        Pull Requests
                    </div>
                        <div className="PRDetails-Container">
                            55
                        </div>
                    </div>

                <div className="CodeLines-Container">
                    <div className="CodeLineTitle-Container">
                        Lines of Code
                    </div>
                    <div className="CodeLinesDetails-Container">
                        49
                    </div>
                </div>

                <div className="CodeReviews-Container">
                    <div className="RodeReviewTitle">
                        Code Reviews Completed
                    </div>
                    <div className="codeReviewDetails-Container">
                        76
                    </div>
                </div>
            </div>

        </div>
    
        
        )
    }
}

export default github
