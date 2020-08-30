import React, { useState, Fragment } from 'react'
import styles from './routes.module.css'
import Routes from './routes'

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
      <nav
        className={toggle ? `${styles.open} ${styles.menu}` : `${styles.menu}`}>
        {routes.map((r) => (
          <Routes
            key={`${r.location}-${r.classes}`}
            onClick={toggleHandler}
            classes={`${styles.disc} ${styles[r.classes]}`}
            location={r.location}
          />
        ))}
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
