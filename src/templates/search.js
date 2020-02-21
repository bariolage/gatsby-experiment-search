import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import List from "../components/list"
import Form from "../components/form"
import { useAppContext } from "../index"

export default props => {
  const state = useAppContext()
  useEffect(() => state.setSearching(props.location.search.split("=").pop()))
  const store = JSON.parse(props.data.store)
  const index = props.data.index
  const results = useFlexSearch(state.searching, index, store)
  return (
    <>
      <Form
        value={state.searching}
        onSubmit={values => {
          state.setSearching(values.search)
          navigate(`/search/?q=${values.search}`)
        }}
      />
      <List results={results} />
    </>
  )
}
