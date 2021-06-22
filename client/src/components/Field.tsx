import React from "react"
// @ts-ignore
import s from "../styles/field.module"

interface IFieldProps {
  type?: string
  label: string
  value: string
  param: string
  msg: string
  noError?: boolean
  exClass?: string
  isRequired?: string
  change(event: React.ChangeEvent<HTMLInputElement>): any
}

const Field: React.FC<IFieldProps> = ({
  type = "text",
  label,
  value = "",
  param,
  msg,
  noError,
  exClass = "",
  isRequired = false,
  change,
}) => {
  return (
    <label
      className={`${s.field} ${isRequired && s.field___required} ${exClass}`}
    >
      <span className={s.field__label}>{label}</span>
      <input
        onChange={change}
        className={s.field__input}
        type={type}
        value={value}
        name={param}
      />
      {!noError && <span className={s.field__msg}>{msg}</span>}
    </label>
  )
}

export default Field
