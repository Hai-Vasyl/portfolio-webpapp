import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Project from "../pages/Project"
import Contacts from "../pages/Contacts"
import ModProject from "../pages/ModProject"
import Profile from "../pages/Profile"
import Users from "../pages/Users"

const mainRoutes = [
  { path: "/", exact: true, component: Home },
  { path: "/about", component: About },
  { path: "/contacts", component: Contacts },
  { path: "/users", exact: true, component: Users },
  { path: "/projects", exact: true, component: Projects },
  { path: "/users/:userid", component: Profile },
  { path: "/projects/:projectid", component: Project },
]

const adminRouts = [
  ...mainRoutes,
  { path: "/create", component: ModProject },
  { path: "/edit/:projectid", component: ModProject },
]

export const getRoutes = () => {}
