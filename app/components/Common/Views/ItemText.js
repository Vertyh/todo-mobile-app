import styled from 'styled-components/native';

const ItemText = styled.Text`
    font-size: 24;
    color: #444;
    padding-left: 20;
    ${(props) => props.status ? ' text-decoration-line: line-through; color: #D2D3E3;' : ''}
`;

export default ItemText;