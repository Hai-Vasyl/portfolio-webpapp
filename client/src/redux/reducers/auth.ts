import { SET_AUTH, IAuth, actionDefinitions } from "../types/auth"

const initState: IAuth = {
  userId: "",
  token: "",
}

const authReducer = (state = initState, action: actionDefinitions): IAuth => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
      }
    default:
      return state
  }
}

export default authReducer
