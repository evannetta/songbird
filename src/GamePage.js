import React from 'react';
import { Container} from 'react-bootstrap'
import Question from './Components/Question'
import Answers from './Components/Answers'

const GamePage = ({success,  birdName, audio, handleAnswers}) => {
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
        setPageNumber(pageNumber + 1);
        setSuccess(false);
        setbirdIndex(Math.floor(Math.random() * max));
        setBirdName(birdsData[pageNumber + 1][birdIndex].name);
        setBtnClass(Array(answers.length).fill('indicator bg-light'));
        setAudio(birdsData[pageNumber + 1][birdIndex].audio);
      };
      
    return (
        <Container>
            <Question name = {success? birdName : '???????' } audio = {audio}/>
            <Answers answers = {answers} btnClass = {btnAnswerClass} handleAnswers = {handleAnswers}/>
            {/* <Description /> */}
            <button 
                type="button"
                className={`mt-3 w-100 btn ${success ? 'btn-success':'btn-danger'}`}
                onClick = {handleNextLevel}
                disabled = {!success}>
                Наступний рівень
            </button>
        </Container>
        )
    }
export default GamePage;