import styled from 'styled-components';

const Card = styled.div`
    background: #fff;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    height: ${props => props.height}
`

export default Card;