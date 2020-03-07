import React from "react"
import "./button.scss"

const Button = ({ stringLink }) => (
  <a href={stringLink} className="btn10">
    <span>View More</span>
    <div className="transition" />
  </a>
)

export default Button
