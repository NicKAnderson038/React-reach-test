/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, Fragment } from 'react'
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'

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

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => setToggle(!toggle)
  return (
    <Fragment>
      <nav css={classes.font} className={`top-right ${toggle ? 'open' : ''}`}>
        <Link
          onClick={toggleHandler}
          className="disc l1"
          to="items"
          getProps={() => {
            return {
              style: {
                textDecoration: 'none',
              },
            }
          }}>
          <span>Items</span>
        </Link>
        <Link
          onClick={toggleHandler}
          className="disc l2"
          to="about"
          getProps={() => {
            return {
              style: {
                textDecoration: 'none',
              },
            }
          }}>
          <span>About</span>
        </Link>
        <Link
          onClick={toggleHandler}
          className="disc l3"
          to="help"
          getProps={() => {
            return {
              style: {
                textDecoration: 'none',
              },
            }
          }}>
          <span>Help</span>
        </Link>
        <Link
          onClick={toggleHandler}
          className="disc l4"
          to="/"
          getProps={() => {
            return {
              style: {
                textDecoration: 'none',
              },
            }
          }}>
          <span>Home</span>
        </Link>
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
// const Nav = () => (
//   <>
//     <div className="navbar">
//       <nav>
//         <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
//         <Link to="items">Items</Link>
//       </nav>
//     </div>
//   </>
// )

export default Nav
