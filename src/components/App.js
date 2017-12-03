import React from 'react';
import Container from './sharedstyled/Container';
import Project from './project/Project';
import projects from '../json/projects';

const App = () => (
    <Container>
        { projects.list.map( (x, i) => <Project key={i} title={x.title} subtitle={x.subtitle} list={x.list}/>)}
    </Container>
);

export default App;