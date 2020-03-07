import React from "react"
import Button from '../Button';
import "./topbar.scss"

const TopBar = ({ stringLink }) => (
  <div className="topbar-container">
    <Button>Sources</Button>
    <div>Logo</div>
    <div></div>
  </div>
)

export default TopBar
