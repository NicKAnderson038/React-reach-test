/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Link } from '@reach/router'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const classes = {
  title: css`
    font-size: 16;
    font-family: Optima, sans-serif;
    font-weight: bold;
  `,
  content: css`
    border: 1px solid #a3e9f7;
    &:hover {
      background-color: #a3e9f7;
      border: 1px solid grey;
    }
  `,
}

const slugs = [1, 2, 3, 'stuff', 'goes', 'here']

const Items = () => {
  return (
    <div>
      <Card
        style={{ display: 'inline-block', minWidth: 275 }}
        variant="outlined">
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
            <CardContent css={classes.content}>
              <Typography
                css={classes.title}
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
