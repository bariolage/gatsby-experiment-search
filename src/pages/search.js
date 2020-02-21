import React from "react"
import { graphql } from "gatsby"
import { Router } from "@reach/router"

import Search from "../templates/search"

const SearchRoutes = ({ data: { search } }) => {
  return (
    <Router basepath="/search">
      <Search data={search} query="" path="/" />
    </Router>
  )
}

export const simpleQuery = graphql`
  query {
    search: localSearchPages {
      store
      index
    }
  }
`

export default SearchRoutes
