import React from "react"

export default props => {
  return (
    <ul>
      {props.results.map(result => (
        <li key={result.id}>{result.name}</li>
      ))}
    </ul>
  )
}
