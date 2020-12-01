import styled from 'styled-components/native';

interface IProps {
    background?: string
}

export const Container = styled.View<IProps>`
    flex: 1;
    background: ${props => props.background || '#fff'};
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

interface IPropsTitle {
    size?: number
}

export const Tilte = styled.Text<IPropsTitle>`
    font-size: ${props => props.size || 30}px;
    margin-bottom: 100px;
    font-weight: bold;
`;