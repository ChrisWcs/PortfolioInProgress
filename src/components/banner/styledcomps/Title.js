import styled from 'styled-components';

const Title = styled.h1`
    font-family: Arial;
    font-size: 60px;
    letter-spacing: 2px;
    color: white;

    @media (max-device-width: 480px) {
        font-size: 30px;
    }
`;

export default Title;