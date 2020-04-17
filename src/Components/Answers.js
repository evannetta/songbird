import React from 'react';
import { ListGroup } from 'react-bootstrap'

const Answers = ({answers,  btnClass, handleAnswers}) => {
    return (
        <ListGroup className = 'mt-3' onClick={(e) => handleAnswers(e.target)}>
            {answers.map((name,index) => 
                <ListGroup.Item value = {index} name = {name} key = {name} action className = 'text-left'>
                    <span className = {btnClass[index]}></span>
                    {name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}
export default Answers;