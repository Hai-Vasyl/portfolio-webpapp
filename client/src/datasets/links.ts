import {
  AiOutlineIdcard,
  AiOutlineHome,
  AiOutlineAppstoreAdd,
  AiOutlinePhone,
  AiOutlineTeam,
} from "react-icons/ai"

const mainLinks = [
  { to: "/", exact: true, title: "Home", Icon: AiOutlineHome },
  { to: "/about", title: "About", Icon: AiOutlineIdcard },
  {
    to: "/projects",
    exact: true,
    title: "Projects",
    Icon: AiOutlineAppstoreAdd,
  },
  { to: "/users", exact: true, title: "Users", Icon: AiOutlineTeam },
  { to: "/contacts", title: "Contacts", Icon: AiOutlinePhone },
]

export const getLinks = () => {
  return mainLinks
}
