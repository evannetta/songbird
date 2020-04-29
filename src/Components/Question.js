import React from 'react';
import {Image, Card} from 'react-bootstrap'

const Question = ({name, audio, image}) => {
    return (
        <Card
            border = 'primary'
            text = 'info'>
            <Card.Header>{name}</Card.Header>
            <Card.Body >
                <Card.Title>
                    <Image
                        src = {image}
                        rounded
                        style={{ height: '10rem' }}/> 
                </Card.Title>
                <audio
                    className = 'custom-range'
                    src={audio}
                    controls >
                </audio>
            </Card.Body>
        </Card>
     )
}
export default Question;