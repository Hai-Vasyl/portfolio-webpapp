import React from "react"
// @ts-ignore
import s from "../styles/loader.module.scss"

interface ILoaderProps {
  load: boolean
}

const Loader: React.FC<ILoaderProps> = ({ load }) => {
  return (
    <div className={`${s.loader} ${load ?? s.loader___active}`}>
      <div className={s.loader__spinner}>
        <div className={s.loader__line}></div>
        <div className={s.loader__line}></div>
      </div>
    </div>
  )
}

export default Loader
