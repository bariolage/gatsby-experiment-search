import React from "react"
import Minimal from "../components/minimal"
import { Link } from "gatsby"

export default ({ data: { search } }) => {
  const store = JSON.parse(search.store)
  const index = search.index
  return (
    <>
      <Link to="/">home</Link>
      <Minimal index={index} store={store} />
    </>
  )
}

export const minimalQuery = graphql`
  query {
    search: localSearchPages {
      store
      index
    }
  }
`
