import React from 'react';
import PropTypes from 'prop-types';

import Project from './Project';
import ProjectHeader from './styledcomps/ProjectHeader';
import Container from './styledcomps/Container';
import Row from './styledcomps/Row';

const Projects = ({list}) => (
    <div>
        <Row>
            <ProjectHeader>
                Projects
            </ProjectHeader>
        </Row>
        <Container>
            {list.map( (x, i) => <Project key={i} {...x} />)}
        </Container>
    </div>
);

Projects.propTypes = {
    list: PropTypes.array
};

export default Projects;