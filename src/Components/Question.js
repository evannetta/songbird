import React from 'react';
import {Image, Card} from 'react-bootstrap'
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';

const Question = ({name, audio, image, description}) => {
  let imgRef = useRef(null);
  let textRef = useRef(null);
  
  useEffect(() => {
    let tl = gsap.timeline();
    if(image.opacity){
      tl.to(imgRef.current, {filter: 'blur(0px)', opacity: 1, duration: 1})
      tl.to(textRef.current, {opacity: 1, duration: 1},'<+0.7')
    } else {
      tl.set(imgRef.current, {filter: 'blur(20px)', opacity: 0.95})
      tl.set(textRef.current, {opacity: 0})
    } 
  }, [image.opacity]);

  return (
    <Card
      border = 'primary'
      text = 'info'>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>
          <Image
            src = {image.image}
            rounded
            fluid
            ref = {imgRef}/> 
        </Card.Title>
        <Card.Text 
          ref = {textRef}
          style = {{textAlign: 'justify'}}>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <audio
          className = 'custom-range'
          src = {audio}
          controls >
        </audio>
      </Card.Footer>   
    </Card>
  )
}
export default Question;