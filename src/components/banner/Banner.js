import React from 'react';
import PropTypes from 'prop-types';

import Column from './styledcomps/Column';
import Title from './styledcomps/Title';
import SubTitle from './styledcomps/SubTitle';

const Banner = ({name, subtitle}) => (
    <Column>
        <Title>{name}</Title>
        <SubTitle>{subtitle}</SubTitle>
    </Column>
);

Banner.propTypes = {
    name: PropTypes.string,
    subtitle: PropTypes.string
};

export default Banner;