import React from "react"
// @ts-ignore
import s from "../styles/button.module.scss"

interface IButtonProps {
  title?: String
  isBtn?: boolean
  Icon?: any
  exClass?: string
  click?(): any
}

const Button: React.FC<IButtonProps> = ({
  title,
  isBtn,
  Icon,
  exClass = "",
  click,
}) => {
  return (
    <button
      className={`${s.btn} ${exClass}`}
      type={isBtn ? "button" : "submit"}
      onClick={click ? click : () => {}}
    >
      <Icon className={s.btn__icon} />
      <span className={s.btn__title}>{title}</span>
    </button>
  )
}

export default Button
