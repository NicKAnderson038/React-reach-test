import React, { useState, Fragment } from 'react'
import styles from './routes.module.css'
import Routes from './routes'

const routes = [
  {
    classes: 'l4',
    location: 'Home',
    background: '#ffa91c',
    textStatic: 'purple',
    textActive: 'blue',
  },
  {
    classes: 'l3',
    location: 'Help',
    background: '#ff912b',
    textStatic: 'purple',
    textActive: 'blue',
  },
  {
    classes: 'l2',
    location: 'About',
    background: '#ff7a39',
    textStatic: 'purple',
    textActive: 'blue',
  },
  {
    classes: 'l1',
    location: 'Items',
    background: 'tomato',
    textStatic: 'purple',
    textActive: 'blue',
  },
].reverse()

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  const toggleHandler = () => setToggle(!toggle)
  return (
    <Fragment>
      <nav
        className={toggle ? `${styles.open} ${styles.menu}` : `${styles.menu}`}>
        {routes.map((r, i) => {
          return (
            <Routes
              key={`${r.location}-${r.classes}`}
              onClick={toggleHandler}
              classes={`${styles.disc} ${styles[r.classes]}`}
              colors={routes[i]}
              location={r.location}
            />
          )
        })}
        <button
          className={`${styles.disc} ${styles.l5} ${styles.toggle} ${styles.menu}`}
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
