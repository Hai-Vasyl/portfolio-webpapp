import React from "react"
import Form from "./Form"
import Button from "./Button"

const FormAuth: React.FC = () => {
  const configForm = [
    { param: "firstname", label: "Firstname", value: "some" },
    { param: "email", label: "Email", value: "some@gmail.com", type: "email" },
  ]

  const onSubmit = (params: { [key: string]: string }) => {
    console.log({ params }, "SUBMITED")
  }

  return (
    <div>
      <Form
        config={configForm}
        title='Auth form'
        loading={false}
        submit={onSubmit}
        btns={() => (
          <>
            <span>Something</span>
            {/* <Button/> */}
          </>
        )}
      />
    </div>
  )
}

export default FormAuth
