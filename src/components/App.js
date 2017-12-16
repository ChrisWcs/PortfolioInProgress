import React from 'react';
import normalize from './sharedstyled/normalize';
import Projects from './project/Projects';
import Banner from './banner/Banner';
import Bio from './bio/Bio';

import projects from '../json/projects';
import personal from '../json/personal';


const App = () => {
    normalize();
    return (
        <div>
            <Banner name={personal.name} subtitle={"Software Developer"}/>
            <Bio bio={personal.bio}/>
            <Projects list={projects.list}/>
        </div>
    );
};

export default App;