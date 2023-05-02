import React from 'react';
import { Alert} from 'react-bootstrap'

const EndGamePage = ({score, handleNewGame}) => {
  return (
    <>
      <Alert
        className = 'pt-5' 
        style = {{height: '10em'}} 
        variant = 'success'>
        <Alert.Heading>
          Congradulations!
        </Alert.Heading>
        <p>You scored {score} points out of 30</p>
      </Alert>
      <button 
        type = 'button'
        className = 'w-100 btn btn-primary'
        onClick = {() => handleNewGame()}>
        Play again
      </button>
    </>
    )
  }
export default EndGamePage;