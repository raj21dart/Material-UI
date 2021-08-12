import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor : 'violet',
    '&:hover': {
      backgroundColor : 'blue',
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      {/* Create page */}
      <Typography 
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create A New Page.
      </Typography>

      {/* Button */}
      <Button
        className = {classes.btn}
        onClick={() => console.log('You clicked me!')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  )
}
