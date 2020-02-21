import React, { useState } from "react"
import { graphql } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

export default ({ data: { search } }) => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, search.index, JSON.parse(search.store))
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setQuery(e.target.value)
        }}
        placeholder="search an ewok"
      />
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
