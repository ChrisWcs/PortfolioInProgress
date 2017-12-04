import React from 'react';

import Container from './sharedstyled/Container';
import Project from './project/Project';
import Banner from './banner/Banner';

import projects from '../json/projects';
import normalize from './sharedstyled/normalize';

const App = () => {
    normalize();
    return (
        <div>
            <Banner name={"Christian Hansen"} subtitle={"Software Developer"}/>
            <Container>
                { projects.list.map( (x, i) => <Project key={i} 
                                                        title={x.title} 
                                                        subtitle={x.subtitle} 
                                                        list={x.list}
                                                        demo={x.demo}
                                                        github={x.github}/>)}
            </Container>
        </div>
    );
};

export default App;