import React from "react"
import { getLinks } from "../datasets/links"
import { Link } from "react-router-dom"
// @ts-ignore
import s from "../styles/navigation.module"
// @ts-ignore
import logo from "../images/logo"
import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"
import Avatar from "./Avatar"
import { useQuery } from "@apollo/client"
import { GET_USER_DATA } from "../resolvers/queries"
import Button from "./Button"
import { BiLogIn } from "react-icons/bi"
import NavLink from "./NavLink"

const Navigation: React.FC = () => {
  const { auth } = useSelector((state: RootStore) => state)
  const { data: dataUser, loading: loadUser } = useQuery(GET_USER_DATA, {
    variables: { userId: auth.userId },
  })
  const genLinks = () => {
    return getLinks().map((link) => {
      return <NavLink key={link.to} {...link} />
    })
  }

  const handleLogout = () => {
    console.log("LOG out")
  }

  const handlePopupAuthform = () => {
    console.log("popup auth form")
  }

  const userData: any = auth.userId && dataUser && dataUser.getUser

  const dropdown = (
    <div className={s.dropdown}>
      <button className={s.dropdown__avatar}>
        <Avatar {...userData} />
      </button>
      <div className={s.dropdown__menu}>
        <div className={s.dropdown__info}>
          <Link className={s.dropdown__username} to={`/users/${userData._id}`}>
            {userData.firstname + userData.lastname}
          </Link>
          <span className={s.dropdown__email}>{userData.email}</span>
        </div>
        <NavLink
          exClass={s.dropdown__link}
          to={`/users/${userData._id}`}
          title='My profile'
        />
        <button
          className={`${s.navlink} ${s.dropdown__link}`}
          onClick={handleLogout}
        >
          <span className={s.navlink__title}>Log out</span>
        </button>
      </div>
    </div>
  )

  return (
    <div className={s.nav}>
      <div className={s.nav__menu}>
        <Link className={s.nav__logo} to='/'>
          <img src={logo} alt='Image logotype' />
        </Link>
        <div className={s.nav__links}>{genLinks()}</div>
        {auth.userId ? (
          dropdown
        ) : (
          <Button Icon={BiLogIn} click={handlePopupAuthform} />
        )}
      </div>
    </div>
  )
}

export default Navigation
