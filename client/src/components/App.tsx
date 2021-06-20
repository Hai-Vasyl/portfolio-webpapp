import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
// import {RootStore} from "../redux/store"
import { SET_AUTH } from "../redux/types/auth"

const App = () => {
  // const {auth} = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const _auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (Object.keys(_auth).length) {
      const { userId, token } = _auth
      dispatch({ type: SET_AUTH, payload: { userId, token } })
    }
  }, [dispatch])

  return (
    <div>
      <div>Hello world</div>
    </div>
  )
}

export default App
