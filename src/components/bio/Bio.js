import React from 'react';

import Column from './styledcomps/Column';
import Row from './styledcomps/Row';
import BioP from './styledcomps/BioP';

const Bio = ({bio}) => (
    <Row>
        <Column>
            <BioP>{bio}</BioP>
        </Column>
    </Row>
);

export default Bio;