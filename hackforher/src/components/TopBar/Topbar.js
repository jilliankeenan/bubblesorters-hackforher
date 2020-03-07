import React from "react"
import Button from '../Button';
import "./topbar.scss"

const TopBar = ({ onClickSourceButton }) => (
  <div className="topbar-container">
    <Button isLight onClick={onClickSourceButton}>
      <i class="fa fa-th fa-lg" aria-hidden="true"></i>
    </Button>
    <div></div>
    <div></div>
  </div>
)

export default TopBar
