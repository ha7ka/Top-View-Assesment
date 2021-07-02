import React from 'react';
import styled from 'styled-components';

export const StyledTextInput = (props) => (
    <StyledInput type="text" {...props} />
);

const StyledInput = styled.input`
    border-radius: 5px;
    border-width: 1px;
    height: ${props => (props.height)};
    width: 225px;
    height: 35px;
    margin: 5px;
    margin-top: 0;
    margin-bottom: 0;
`;