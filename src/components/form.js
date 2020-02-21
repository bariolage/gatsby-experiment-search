import React from "react"
import { Formik, Form, Field } from "formik"

export default props => {
  return (
    <Formik initialValues={{ search: props.value }} onSubmit={props.onSubmit}>
      {({ values, handleChange }) => {
        return (
          <Form>
            <Field
              type="text"
              name="search"
              value={values.search}
              onChange={handleChange}
              placeholder="search"
            />
          </Form>
        )
      }}
    </Formik>
  )
}
