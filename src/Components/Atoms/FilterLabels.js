import React from 'react';
import styled from 'styled-components';

export const FilterLabel = ({
    labelText,
    onClick,
    active
}) => (
        <LabelStyle active={active} onClick={onClick}>
            {labelText}
        </LabelStyle>
);

const LabelStyle  = styled.li`
    background-color:  ${props => (props.active && 'lightgray')};
    padding-right: 10px;
    padding-left: 10px;
`;



