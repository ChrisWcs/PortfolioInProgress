import React from 'react';

import Projects from './project/Projects';
import Banner from './banner/Banner';

import projects from '../json/projects';
import normalize from './sharedstyled/normalize';

const App = () => {
    normalize();
    return (
        <div>
            <Banner name={"Christian Hansen"} subtitle={"Software Developer"}/>
            <Projects list={projects.list}/>
        </div>
    );
};

export default App;