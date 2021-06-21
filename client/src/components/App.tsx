import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../redux/store"
import { SET_AUTH } from "../redux/types/auth"
import Navigation from "./Navigation"
import { Route, Switch, Redirect } from "react-router-dom"
import { getRoutes } from "../datasets/routes"
import { GET_USER_DATA } from "../resolvers/queries"
import { useQuery } from "@apollo/client"
import Loader from "./Loader"

const App = () => {
  const { auth } = useSelector((state: RootStore) => state)
  const dispatch = useDispatch()
  const [initLoad, setInitLoad] = useState(true)
  const { data: dataUser, loading: loadUser } = useQuery(GET_USER_DATA, {
    variables: { userId: auth.userId },
  })

  useEffect(() => {
    const _auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (_auth.userId && _auth.userId.length) {
      const { userId, token } = _auth
      dispatch({ type: SET_AUTH, payload: { userId, token } })
    }
    setInitLoad(false)
  }, [dispatch])

  const genRoutes = () => {
    return getRoutes(dataUser && dataUser.getUser.role).map((route) => {
      return <Route key={route.path} {...route} />
    })
  }

  return (
    <div className='page'>
      <Navigation />
      <Loader load={initLoad} />
      {!initLoad && (!auth.userId || (auth.userId && !loadUser)) && (
        <div className='page__wrapper'>
          <Switch>
            {genRoutes()}
            <Redirect to='/' />
          </Switch>
        </div>
      )}
    </div>
  )
}

export default App
