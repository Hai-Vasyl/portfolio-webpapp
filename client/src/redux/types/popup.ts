import React from "react"

export const OPEN_POPUP = "OPEN_POPUP"
export const CLOSE_POPUP = "CLOSE_POPUP"

interface OpenPopup {
  type: typeof OPEN_POPUP
  payload(): React.FC
}

interface ClosePopup {
  type: typeof CLOSE_POPUP
}

export type actionDefinitions = OpenPopup | ClosePopup
