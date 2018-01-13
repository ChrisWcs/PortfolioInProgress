import React from 'react';
import ReactShow from 'react-show';

class Lang extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isExpanded: false
        };

        this.expand = this.expand.bind(this);
    }

    expand(){
        this.setState( prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }

    render(){
        return (
            <div>
                <ReactShow show={this.state.isExpanded}/>
            </div>
        );
    }
}

export default Lang;