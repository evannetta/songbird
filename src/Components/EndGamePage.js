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
                    Вітаємо!
                </Alert.Heading>
                <p>Ви пройшли вікторину та набрали {score} балів з 30</p>
            </Alert>
            <button 
                type = 'button'
                className = 'w-100 btn btn-primary'
                onClick = {() => handleNewGame()}>
                Грати ще
            </button>
        </>
        )
    }
export default EndGamePage;