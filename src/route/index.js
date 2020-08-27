import React from 'react'
import { Link } from '@reach/router'

const index = () => (
  <>
    <div className="navbar">
      <nav>
        <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
        <Link to="items">Items</Link>
      </nav>
    </div>
  </>
)

export default index
