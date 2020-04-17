import React from 'react';
import { Row, Image , Card} from 'react-bootstrap'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Question = ({name, audio}) => {
    return (
        <Card border = 'primary' >
            <Row className="no-gutters">
                <Card.Header className = "col-md-4">
                    <Image src={require('../default-bird.jpg')} rounded /> 
                </Card.Header>
                <Card.Body className = "col-md-8">
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text className = 'mt-4' >
                    <AudioPlayer  
                        src={audio}
                        autoPlay
                        controls
                      />
                    </Card.Text>
                </Card.Body>
            </Row> 
        </Card>
     )
}
export default Question;