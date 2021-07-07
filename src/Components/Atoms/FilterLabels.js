import React from 'react';
import styled from 'styled-components';

export const FilterLabel = ({
    labelText,
    onClick,
    active
}) => (
        <LabelContainer active={active} onClick={onClick}>
            <LabelStyle active={active}>
                {labelText}
            </LabelStyle>
        </LabelContainer>
);

const LabelContainer  = styled.li`
    height: 30px;
    background-color:  ${props => (props.active ? props.color ? props.color : '#6A6A6A' : '')};
    border-radius: 15px;
    margin:  4px auto;
`;

const LabelStyle = styled.p`
    margin: 6px 8px;
    color:  ${props => (props.active ? props.color ? props.color : 'white' : '#5A5A5A')};

    font-size: 12.5px;

`;



