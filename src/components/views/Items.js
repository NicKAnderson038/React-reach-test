import React from 'react'
import { Link } from '@reach/router'
import styles from './items.module.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const slugs = [1, 2, 3, 'stuff', 'goes', 'here']

const Items = () => (
  <div>
    <Card style={{ display: 'inline-block', minWidth: 275 }} variant="outlined">
      {slugs.map((elem, i) => (
        <Link
          key={`${elem}-${i}`}
          to={`${elem}`}
          // {...props}
          getProps={() => {
            return {
              style: {
                textDecoration: 'none',
              },
            }
          }}>
          <CardContent className={`${styles.content}`}>
            <Typography
              className={`${styles.title}`}
              color="textSecondary"
              gutterBottom>
              Item {elem}
            </Typography>
          </CardContent>
        </Link>
      ))}
    </Card>
  </div>
)

export default Items
