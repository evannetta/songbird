import React from 'react';
import {  Image , Card} from 'react-bootstrap'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Question = ({name, audio, image}) => {
    return (
        <Card border = 'primary' text = 'info'>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Body >
                <Card.Title>
                    <Image src={image} rounded  style={{ height: '10rem' }}/> 
                </Card.Title>
                <Card.Text >
                    <AudioPlayer  
                        src={audio}
                        autoPlay
                        controls
                        />
                </Card.Text>
            </Card.Body>
        </Card>
     )
}
export default Question;