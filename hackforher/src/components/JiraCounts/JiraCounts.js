import React from "react"
import "./jiracounts.scss"
import Heading from '../Heading'
import CountUp from 'react-countup';

const JiraCounts = ({ children }) => (
  <div className="jiracount-container">
    <CountUp end={100} duration={10} />
    <Heading>Number of Points Completed!</Heading>
  </div>
)

export default JiraCounts
