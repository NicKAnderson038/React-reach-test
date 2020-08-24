import React from 'react'
import { Link } from '@reach/router'

const slugs = [1, 2, 3, 'stuff', 'goes', 'here']

const items = () => (
  <ul>
    {slugs.map((elem, i) => (
      <li key={`${elem}-${i}`}>
        <Link to={`${elem}`}>Item {elem} </Link>
      </li>
    ))}
  </ul>
)

export default items
