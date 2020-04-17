import React, { useState} from 'react';
import { Container} from 'react-bootstrap'
import classNames from 'classnames';

import Header from './Components/Header'
import Question from './Components/Question'
import Answers from './Components/Answers'
import birdsData from './birds'
import './App.css';
import './bootstrap.min.css';


const App = () => {
  const max = 6;
  const [pageNumber, setPageNumber] = useState(0);
  const [birdIndex, setbirdIndex] = useState(Math.floor(Math.random() * max));
  const [birdName, setBirdName] = useState(birdsData[pageNumber][birdIndex].name);
  const [audio, setAudio] = useState(birdsData[pageNumber][birdIndex].audio);
  console.log(birdName);
  
  let answers = birdsData[pageNumber].map((item) => item.name);
  
  let  btnInitClass = classNames('indicator', {'bg-light': true});
  const [success, setSuccess] = useState(false);
  const [btnAnswerClass, setBtnClass] = useState(Array(answers.length).fill(btnInitClass));
  
  const handleAnswers = (button) => {
    if(!success){
      if(button.name === birdName){
          setSuccess(true);
      }
      let newBtnClass = [...btnAnswerClass];
      newBtnClass[button.value] = classNames(
      'indicator',
      {'bg-light': false},
      button.name === birdName ? 'bg-success' : 'bg-danger');
      setBtnClass([...newBtnClass]);
    }
  }
  
  const handleNextLevel = () =>{
    setPageNumber(pageNumber < 5 ? pageNumber + 1 : 0);
    setSuccess(false);
    setbirdIndex(Math.floor(Math.random() * max));
    setBirdName(birdsData[pageNumber < 5 ? pageNumber + 1 : 0][birdIndex].name);
    setBtnClass(Array(answers.length).fill(btnInitClass));
    setAudio(birdsData[pageNumber < 5 ? pageNumber + 1 : 0][birdIndex].audio);
  };

   return (
    <Container className="App">
      <Header page = {pageNumber}/>
      <Question name = {success? birdName : '???????' } audio = {audio}/>
      <Answers answers = {answers} btnClass = {btnAnswerClass} handleAnswers = {handleAnswers}/>
      {/* <Description /> */}
      <button className="mt-3 w-100" onClick = {handleNextLevel}>Наступний рівень</button>
    </Container>
  );
}

export default App;
