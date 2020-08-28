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
  nav: css`
    font-family: Alegreya Sans, sans-serif;
    font-weight: bold;
    top: -140px;
    right: -140px;
    display: block;
    position: fixed;
    width: 500px;
    height: 500px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transform: translate3d(25px, -25px, 0);
    transform: translate3d(25px, -25px, 0);
    transition: -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
    transition: transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9),
      -webkit-transform 0.5s cubic-bezier(0.3, 1.4, 0.5, 0.9);
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
      <nav css={classes.nav} className={`${toggle ? 'open' : ''}`}>
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
