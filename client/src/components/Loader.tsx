import React from "react"
// @ts-ignore
import s from "../styles/loader.module.scss"

interface ILoaderProps {
  load: boolean
  extended?: boolean
}

const Loader: React.FC<ILoaderProps> = ({ load, extended }) => {
  return (
    <div
      className={`${s.loader} ${!extended && s.loader___simple} ${
        load ?? s.loader___active
      }`}
    >
      <div className={s.loader__spinner}>
        <div className={s.loader__line}></div>
        <div className={s.loader__line}></div>
      </div>
    </div>
  )
}

export default Loader
