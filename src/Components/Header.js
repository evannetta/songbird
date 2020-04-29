import React from 'react';
import { Pagination, Container, Badge } from 'react-bootstrap'

const Header = ({page, score}) => {
    const data = ['Розминка','Гороб\'ячі','Лісові птахи', 'Співучі птахи', 'Хижі птахи', 'Морські птахи'];
    return (
        <>
            <Container className = 'd-flex flex-wrap justify-content-between'>
                <h1 className = 'text-success'>
                    Song<span className = 'text-warning'>Bird</span>
                </h1>
                <Badge className = 'align-self-end mb-2' 
                    pill 
                    variant = 'info'>
                    Балів: <span className = 'score'>{score}</span>
                </Badge>
            </Container>
            <Pagination className = 'd-flex flex-wrap'>
                { data.map((li, index) =>
                <Pagination.Item className = {`flex-fill ${index === page ? 'active' : ''}`}
                    key = {li}>
                    {li}
                </Pagination.Item>)}
            </Pagination>
        </>
    )
}
export default Header;
