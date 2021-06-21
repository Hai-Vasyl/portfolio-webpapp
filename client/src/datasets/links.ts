import {
  BsHouse,
  BsCardList,
  BsColumnsGap,
  BsPeople,
  BsAt,
} from "react-icons/bs"

const mainLinks = [
  { to: "/", exact: true, title: "Home", Icon: BsHouse },
  { to: "/about", title: "About", Icon: BsCardList },
  { to: "/projects", exact: true, title: "Projects", Icon: BsColumnsGap },
  { to: "/users", exact: true, title: "Users", Icon: BsPeople },
  { to: "/contacts", title: "Contacts", Icon: BsAt },
]

export const getLinks = () => {
  return mainLinks
}
