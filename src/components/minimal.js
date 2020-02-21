import React, { useState } from "react"
import { useFlexSearch } from "react-use-flexsearch"

export default ({ index, store }) => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)
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
