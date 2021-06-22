import React from "react"

import { actionDefinitions, OPEN_POPUP, CLOSE_POPUP } from "../types/popup"

interface IInitState {
  open: boolean
  component(): React.FC | void
}

const initState: IInitState = {
  open: false,
  component() {},
}

const popupReducer = (
  state = initState,
  action: actionDefinitions
): IInitState => {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        open: true,
        component: action.payload,
      }
    case CLOSE_POPUP:
      return {
        ...state,
        open: false,
      }
    default:
      return state
  }
}

export default popupReducer
