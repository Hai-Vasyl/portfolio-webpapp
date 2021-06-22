import React, { useState, useEffect } from "react"
import Field from "./Field"
import Loader from "./Loader"

interface IFormProps {
  config: {
    param: string
    type?: string
    value?: string
    label: string
  }[]
  title: string
  errors?: string
  loading: boolean
  submit(params: { [key: string]: string }): any
  btns: any
}

const Form: React.FC<IFormProps> = ({
  config,
  title,
  errors,
  loading,
  submit,
  btns,
}) => {
  const sampleField = {
    param: "",
    type: "",
    value: "",
    label: "",
    msg: "",
  }
  const [form, setForm] = useState(
    config.map((field) => {
      return { ...sampleField, ...field }
    })
  )

  useEffect(() => {
    // TODO: check errors
  }, [])

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit(
      form.reduce((acumulator: any, field) => {
        return { ...acumulator, [field.param]: field.value }
      }, {})
    )
  }

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setForm((prev) =>
      prev.map((field) => {
        if (field.param === name) {
          return { ...field, value }
        }
        return field
      })
    )
  }

  const fields = form.map((field) => {
    return <Field key={field.param} change={handleChangeField} {...field} />
  })

  return (
    <div>
      <div>{title}</div>
      <form onSubmit={handleSubmitForm}>
        <Loader load={loading} />
        <div>{fields}</div>
        <div>{btns}</div>
      </form>
    </div>
  )
}

export default Form
