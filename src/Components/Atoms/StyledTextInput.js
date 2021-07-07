import React from 'react';
import styled from 'styled-components';

export const StyledTextInput = (props) => (
    <StyledInput type="text" {...props} />
);

const StyledInput = styled.input`
    border-radius: 6px;
    border: 1px solid #BFBFBF;
    height: ${props => (props.height)};
    width: 251px;
    height: 36px;
    margin: 3px;

    /**Font */
    font-size: 15px;
    color: #484848;
    text-indent: 13.5px;
    letter-spacing: 0px;
`;