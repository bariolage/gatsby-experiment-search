import React, { useState } from "react"
import { useFlexSearch } from "react-use-flexsearch"
import { Formik, Form, Field } from "formik"

export default ({ data: { search } }) => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, search.index, JSON.parse(search.store))
  return (
    <div>
      <Formik initialValues={{ query: "" }}>
        <Form
          type="text"
          onChange={e => {
            setQuery(e.target.value)
          }}
          name="name"
        >
          <Field name="query" placeholder="search an ewok" />
        </Form>
      </Formik>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    search: localSearchPages {
      store
      index
    }
  }
`
