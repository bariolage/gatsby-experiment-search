import React from "react"
import { Link } from "gatsby"

export default props => {
  return (
    <>
      <Link to="/">home</Link>
      <main>{props.children}</main>
    </>
  )
}
