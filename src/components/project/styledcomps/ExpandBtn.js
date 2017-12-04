import styled from 'styled-components';

const ExpandBtn = styled.button`
    font-family: Arial;
    font-size: 20px;
    border: solid 2px #00838F;
    background: white;
    color: #00838F;
    border-radius: 200px;
    width: 35px;
    height: 35px;
    transform: translateY(18px);
    cursor: pointer;

    :hover {
        border: solid 2px white;
        background: #00838F;
        color: white;
    }
`;

export default ExpandBtn;