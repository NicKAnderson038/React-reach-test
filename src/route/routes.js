import React, { Fragment } from 'react'
import { Link } from '@reach/router'

const Routes = (props) => {
  const { classes, location, onClick, colors } = props
  return (
    <Fragment>
      <Link
        onClick={onClick}
        className={classes}
        to={location === 'Home' ? '/' : location.toLowerCase()}
        getProps={({ isCurrent }) => {
          return {
            style: {
              textDecoration: 'none',
              background: colors.background,
              color: isCurrent ? colors.textActive : colors.textStatic,
            },
          }
        }}>
        <span>{location}</span>
      </Link>
    </Fragment>
  )
}
// const Nav = () => (
//   <>
//     <div className={styles.navbar>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="about">About</Link> |{' '}
//         <Link to="items">Items</Link>
//       </nav>
//     </div>
//   </>
// )

export default Routes
