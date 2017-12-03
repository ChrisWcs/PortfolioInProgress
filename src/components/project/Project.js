import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Column from './styledcomps/Column';
import Title from './styledcomps/Title';
import SubTitle from './styledcomps/SubTitle';
import ExpandBtn from './styledcomps/ExpandBtn';

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
        const { title, subtitle, list} = this.props;
        return (
            <Column>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
                { isExpanded ? <div>{list.map( (x, i) => <h3 key={i}>{x}</h3>)}</div>: "" }
                <ExpandBtn onClick={this.expand}>{ isExpanded ? "-" : "+" }</ExpandBtn>
            </Column>
        );
    }
}

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    list: PropTypes.array,
};

export default Project;