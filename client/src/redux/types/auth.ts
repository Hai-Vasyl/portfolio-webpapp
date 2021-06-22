export const SET_AUTH = "SET_AUTH"

export interface IAuth {
  token: string
  userId: string
}

interface SetAuth {
  type: typeof SET_AUTH
  payload: IAuth
}

export type actionDefinitions = SetAuth
