import React from 'react';
import normalize from './sharedstyled/normalize';
import Projects from './project/Projects';
import Banner from './banner/Banner';
import Bio from './bio/Bio';

import projects from '../json/projects';


const App = () => {
    normalize();
    return (
        <div>
            <Banner name={"Christian Hansen"} subtitle={"Software Developer"}/>
            <Bio bio={"asdfasdf"}/>
            <Projects list={projects.list}/>
        </div>
    );
};

export default App;