import React from 'react';
import Container from './sharedstyled/Container';
import Project from './project/Project';

const test = {
    title: "LinePlotter",
    list: ["Made using React, Redux, React charts, Glamorous, Glamor and React-slingshot",
           "Contains a main Reducer which makes use of the smaller reducers",
           "Organized by features"],
    subtitle: "App to plot lines of the form mx + b"
};

const App = () => (
    <Container>
        <Project title={test.title} subtitle={test.subtitle} list={test.list}/>
        <Project title={test.title} subtitle={test.subtitle} list={test.list}/>
        <Project title={test.title} subtitle={test.subtitle} list={test.list}/>
    </Container>
);

export default App;