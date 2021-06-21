import React from "react"
import { NavLink as NLink } from "react-router-dom"
// @ts-ignore
import s from "../styles/navigation.module"

interface INavLinkProps {
  to: string
  title?: string
  exact?: boolean
  Icon?: any
  exClass?: string
}

const NavLink: React.FC<INavLinkProps> = ({
  to,
  title,
  exact,
  Icon,
  exClass = "",
}) => {
  return (
    <NLink
      className={`${s.navlink} ${exClass}`}
      activeClassName={s.navlink___active}
      key={to}
      to={to}
      exact={exact}
    >
      <Icon className={s.navlink__icon} />
      <span className={s.navlink__title}>{title}</span>
    </NLink>
  )
}

export default NavLink
