import React, { Component } from 'react';

import Column from './styledcomps/Column';
import Title from './styledcomps/Title';
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
            isExpanded: ! (prevState.isExpanded)
        }));
    }

    render(){
        const { isExpanded } = this.state;
        return (
            <Column>
                <Title>Project</Title>
                { isExpanded ? <div>{[1,2,3].map( (x, i) => <h3 key={i}>{x}</h3>)}</div>: "" }
                <ExpandBtn onClick={this.expand}>{ isExpanded ? "-" : "+" }</ExpandBtn>
            </Column>
        );
    }
}

export default Project;