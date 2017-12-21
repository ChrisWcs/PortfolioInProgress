import React from 'react';
import PropTypes from 'prop-types';

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

Bio.propTypes = {
    bio: PropTypes.string
};

export default Bio;