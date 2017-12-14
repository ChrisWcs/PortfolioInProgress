import React, { Component } from 'react';
import ReactShow from 'react-show';
import PropTypes from 'prop-types';

import Column from './styledcomps/Column';
import Title from './styledcomps/Title';
import SubTitle from './styledcomps/SubTitle';
import Point from './styledcomps/Point';
import ExpandBtn from './styledcomps/ExpandBtn';
import LinkBtn from './styledcomps/LinkBtn';
import Row from './styledcomps/Row';

class Project extends Component {
    constructor(props){
        super(props);

        this.state = {
            isExpanded: false
        };
        this.expand = this.expand.bind(this);
    }

    expand(){
        this.setState( (prevState) => ({
            isExpanded: !(prevState.isExpanded)
        }));
    }

    render(){
        const { isExpanded } = this.state;
        const { title, subtitle, list, demo, github} = this.props;
        return (
            <Column>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                <ReactShow show={isExpanded}>
                    {list.map( (x, i) => <Point key={i}>{x}</Point>)}
                </ReactShow>
                <Row>
                    <LinkBtn href={demo}>Demo</LinkBtn>
                    <LinkBtn href={github}>Github</LinkBtn>
                </Row>
                <ExpandBtn onClick={this.expand}>{ isExpanded ? "-" : "+" }</ExpandBtn>
            </Column>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.array,
    demo: PropTypes.string,
    github: PropTypes.string,
};

export default Project;