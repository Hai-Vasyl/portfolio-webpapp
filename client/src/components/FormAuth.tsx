import React from "react"
import Form from "./Form"
import Button from "./Button"
// @ts-ignore
import s from "../styles/form.module"

const FormAuth: React.FC = () => {
  const configForm = [
    { param: "firstname", label: "Firstname", value: "some" },
    { param: "email", label: "Email", value: "some@gmail.com", type: "email" },
  ]

  const onSubmit = (params: { [key: string]: string }) => {
    console.log({ params }, "SUBMITED")
  }

  return (
    <div className={s.form_auth}>
      <Form
        config={configForm}
        title='Auth form'
        loading={false}
        submit={onSubmit}
        btns={() => (
          <>
            <button>Something</button>
            {/* <Button/> */}
          </>
        )}
      />
    </div>
  )
}

export default FormAuth
