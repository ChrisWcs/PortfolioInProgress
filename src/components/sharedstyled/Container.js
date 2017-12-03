import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: flex-start;

    @media (max-device-width: 480px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: flex-start;
    }
`;

export default Container;