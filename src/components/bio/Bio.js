import React from 'react';

import Column from './styledcomps/Column';
import Row from './styledcomps/Row';

const Bio = ({bio}) => (
    <Row>
        <Column>
            <p>{bio}</p>
        </Column>
    </Row>
);

export default Bio;