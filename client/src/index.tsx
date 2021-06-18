import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import "./styles/index.scss"
import { BrowserRouter as Router } from "react-router-dom"
// import store from "./redux/store"
import { Provider } from "react-redux"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { createUploadLink } from "apollo-upload-client"

const isDev = process.env.NODE_ENV === "development"
const origin = isDev ? "http://localhost:5000" : window.location.origin

const httpLink = createUploadLink({
  uri: `${origin}/graphql`,
})

const authLink = setContext((_, { headers }) => {
  const auth = localStorage.getItem("auth") || ""

  let authtoken = ""
  if (auth.length) {
    const { token }: { token: string } = JSON.parse(auth)
    authtoken = token.length ? token : ""
  }
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${authtoken}`,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

render(
  <ApolloProvider client={client}>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </ApolloProvider>,
  document.getElementById("root")
)
