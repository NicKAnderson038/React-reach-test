/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import Routes from './routes'

const classes = {
  menu: css`
    border: none;
    text-decoration: none;
    outline: none;
  `,
  font: css`
    font-family: Alegreya Sans, sans-serif;
    font-weight: bold;
  `,
}

const routes = [
  {
    classes: 'l1',
    location: 'Items',
  },
  {
    classes: 'l2',
    location: 'About',
  },
  {
    classes: 'l3',
    location: 'Help',
  },
  {
    classes: 'l4',
    location: 'Home',
  },
]

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => setToggle(!toggle)
  return (
    <Fragment>
      <nav css={classes.font} className={`top-right ${toggle ? 'open' : ''}`}>
        {routes.map((r) => (
          <Routes
            key={`${r.location}-${r.classes}`}
            onClick={toggleHandler}
            classes={`disc ${r.classes}`}
            location={r.location}
          />
        ))}
        <button
          css={classes.menu}
          className="disc l5 toggle"
          onClick={toggleHandler}>
          <span>
            <span>Menu</span>
          </span>
        </button>
      </nav>
    </Fragment>
  )
}

export default Nav
