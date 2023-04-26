import React, { useState} from 'react';
import { Container} from 'react-bootstrap'
import birdsData from './birds_eng'
import './App.css';
import './bootstrap.min.css';


import Header from './Components/Header'
import Question from './Components/Question'
import Answers from './Components/Answers'
import EndGamePage from './Components/EndGamePage'

const App = () => {
  const max = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const [birdIndex, setbirdIndex] = useState(Math.floor(Math.random() * max));
  const [birdName, setBirdName] = useState(birdsData[pageNumber][birdIndex].name);
  const [audio, setAudio] = useState(birdsData[pageNumber][birdIndex].audio);
  const [image, setImage] = useState(birdsData[pageNumber][birdIndex].image);
  const [description, setDescription] = useState(birdsData[pageNumber][birdIndex].description);
  const [score, setScore] = useState(0);
  const [levelScore, setLevelScore] = useState(5);
  const [end, setEnd] = useState(false);
  const [success, setSuccess] = useState(false);
  let answers = birdsData[pageNumber].map((item) => item.name);
  const [btnAnswerClass, setBtnClass] = useState(Array(answers.length).fill('indicator bg-light'));
  
  const handleAnswers = (button) => {
    let pressedButton = '';
    if(!success){
      if(button.name === birdName){
          setSuccess(true);
          setScore(score + levelScore);
          setLevelScore(5);
          pressedButton = 'bg-success';
      } else{
        setLevelScore(levelScore - 1);
        pressedButton = 'bg-danger';
      }
      let newBtnClass = [...btnAnswerClass];
      newBtnClass[button.value] = `indicator ${pressedButton}`;
      setBtnClass([...newBtnClass]);
    }
  }
  
  const handleNextLevel = () =>{
    setPageNumber(pageNumber<5 ? pageNumber + 1 : 0);
    setSuccess(false);
    setbirdIndex(Math.floor(Math.random() * max));
    setBirdName(birdsData[pageNumber<5 ? pageNumber + 1 : 0][birdIndex].name);
    setBtnClass(Array(answers.length).fill('indicator bg-light'));
    setAudio(birdsData[pageNumber<5 ? pageNumber + 1 : 0][birdIndex].audio);
    setImage(birdsData[pageNumber<5 ? pageNumber + 1 : 0][birdIndex].image);
    setDescription(birdsData[pageNumber<5 ? pageNumber + 1 : 0][birdIndex].description);
    if(pageNumber === 5){
      setEnd(true);
    }
  };
  
  const handleNewGame = () =>{
    setEnd(false);
    setScore(0);
 };

 return (
    <Container className = 'App'>
      <Header
       page = {pageNumber} 
       score = {score}/>
      {!end ? (<>
      <Question
        name = {success? birdName : 'Guess who I am.' }
        audio = {audio}
      //  image = {success? image : require('./default-bird.jpg')}
        image = {success ? {image, opacity: true} : {image, opacity: false}}
        description = {success? description : ""}
      />
      <Answers
       answers = {answers} 
       btnClass = {btnAnswerClass} 
       handleAnswers = {handleAnswers}/>
      <button 
        type="button"
        className={`mt-3 w-100 btn ${success ? 'btn-success':'btn-danger'}`}
        onClick = {handleNextLevel}
        disabled = {!success}>
        Next
      </button>
      </>) : ( 
      <EndGamePage
       score = {score} 
       handleNewGame = {handleNewGame}/>
      )}
    </Container>
  );
}

export default App;