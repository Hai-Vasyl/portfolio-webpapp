import React from "react"
// @ts-ignore
import s from "../styles/avatar.module"

interface IAvatarProps {
  email?: string
  ava: string
  color: string
  firstname: string
  lastname: string
  role: string
  date?: string
}

const Avatar: React.FC<IAvatarProps> = ({
  ava,
  color,
  firstname,
  lastname,
  role,
}) => {
  return ava ? (
    <img
      src={ava}
      alt='User avatar'
      className={`${s.ava} ${role === "admin" && s.ava___active}`}
    />
  ) : (
    <span
      style={{ backgroundColor: color }}
      className={`${s.ava} ${role === "admin" && s.ava___active}`}
    >
      <span className={s.ava__letters}>{firstname[0] + lastname[0]}</span>
    </span>
  )
}

export default Avatar
