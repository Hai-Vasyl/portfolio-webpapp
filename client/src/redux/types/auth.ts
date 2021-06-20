export const SET_AUTH = "SET_AUTH"

export interface IAuth {
  token: string
  userId: string
}

interface setAuth {
  type: typeof SET_AUTH
  payload: IAuth
}

export type actionDefinitions = setAuth
