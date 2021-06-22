import React from "react"
import Button from "../components/Button"
import { AiOutlinePlus } from "react-icons/ai"
import { useHistory } from "react-router-dom"
import { btn } from "../datasets"
import { useQuery } from "@apollo/client"
import { GET_USER_DATA } from "../resolvers/queries"
import { RootStore } from "../redux/store"
import { useSelector } from "react-redux"
// @ts-ignore
import s from "../styles/projects.module"

const Projects: React.FC = () => {
  const history = useHistory()
  const {
    auth: { userId },
  } = useSelector((state: RootStore) => state)
  const { data } = useQuery(GET_USER_DATA, { variables: { userId } })

  const redirectToModProject = () => {
    history.push("/create")
  }
  const userData = userId && data && data.getUser
  return (
    <div>
      {userData.role === "admin" && (
        <Button
          Icon={AiOutlinePlus}
          exClass={`${btn.second} ${btn.round} ${s.projects__btn_create}`}
          click={redirectToModProject}
        />
      )}
    </div>
  )
}

export default Projects
