import React from 'react';
import {Container, Badge} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';

const Header = ({page, score}) => {
  const data = ['Warm up','Sparrows','Forest birds', 'Singing birds', 'Birds of prey', 'Sea birds'];
  return (
    <>
      <Container className = 'd-flex flex-wrap justify-content-between'>
        <h1 className = 'text-success'>
          Song<span className = 'text-warning'>Bird</span>
        </h1>
        <Badge className = 'align-self-end mb-2' 
          pill 
          variant = 'info'>
          Score: <span className = 'score'>{score}</span>
        </Badge>
      </Container>
      <Nav
        variant = 'pills'
        activeKey= {page}>
        { 
          data.map((li, index) =>
          <Nav.Item className = 'flex-fill'
            key = {li}>
            <Nav.Link 
              eventKey = {index}
              as = 'div'
              className = {index !== page ? 'text-danger' : 'text-white'}>
              {li}
            </Nav.Link>  
          </Nav.Item>)
        }
      </Nav>
    </>
  )
}
export default Header;
