import React from 'react'
import { Link } from '@reach/router'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  content: {
    border: '1px solid #a3e9f7',
    '&:hover': {
      backgroundColor: '#a3e9f7',
      border: '1px solid grey',
    },
  },
  title: {
    fontSize: 16,
    fontFamily: 'Optima, sans-serif',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
})

const slugs = [1, 2, 3, 'stuff', 'goes', 'here']

const Items = (props) => {
  const classes = useStyles()
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        {slugs.map((elem, i) => (
          <Link
            to={`${elem}`}
            // {...props}
            getProps={() => {
              return {
                style: {
                  textDecoration: 'none',
                },
              }
            }}>
            <CardContent className={classes.content} key={`${elem}-${i}`}>
              <Typography
                className={classes.title}
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
}

export default Items
