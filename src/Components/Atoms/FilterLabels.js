import React from 'react';
import styled from 'styled-components';

export const FilterLabel = ({
    labelText,
    onClick,
    active
}) => (
        <LabelContainer active={active} onClick={onClick}>
            <LabelStyle>
                {labelText}
            </LabelStyle>
        </LabelContainer>
);

const LabelContainer  = styled.li`
    background-color:  ${props => (props.active ? props.color ? props.color : 'darkgrey' : '')};
    border-radius: 10px;
    margin:  4px auto;
`;

const LabelStyle = styled.p`
    margin: auto 8px;
`;



