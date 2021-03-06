import React from 'react';
import  styled from 'styled-components';
import { StyledTextInput } from '../Atoms';
import { Icons } from '../../Constants';

export const LocationListInputItem = ({
    /**List control */
    length,
    index,
    closeInput,
    Icon,
    listText,
    addDestination,
    ...rest
}) => (
    <ListItem length={length} >
        <Content length={length} index={index}>
            {(index === undefined || length === 1) && (
                <ListIcon>
                    <Icon 
                        style={{ 
                            color: 'black',
                            width: '18px',
                            height: '18px' 
                        }} 
                        size="18px" 
                    />
                </ListIcon>
            )}
            {listText ? (<StyledText onClick={addDestination}>{listText}</StyledText>) : <StyledTextInput {...rest} />}
            <ListIcon>
            { (index !== undefined && length > 1)&& (
                    <Icons.X  size="18px"  onClick={closeInput}/>
            )}
            </ListIcon>
        </Content>
    </ListItem>
)


const ListItem = styled.li`
    display: flex;
    position: relative;
    margin: 5px;

    &:nth-child(2){
        counter-reset: destinationList;
    }

    &:after{
        content:"";
        position: absolute;
        left: 9px; 
        bottom: -0.90em;
        border-left: 2px dotted #707070;
        height: 55%;
        width: 1px;
    }


    &:nth-last-child(2)::after{
        content: none;
    }

    &:last-child::after{
        content: none;
    }

    ${
        props =>  props.length > 1 &&
            `
            &:before {
                counter-increment: destinationList;
                content: counter(destinationList, upper-alpha);
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                margin:auto;
                width: 18px;
                height: 18px;
                font-size: 10px;
                font-weight: 600;
                border: 1px solid #000000;
                border-radius: 50%;
                background-color: transparent;
            }  `
    };

`; 

const StyledText = styled.div`
    padding-left: 6px;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 0px;
    padding-left: 22.5px;

    /**font */
    font-size: 12.5px;
    color: #5A5A5A;
    letter-spacing: 0px;
`;

const ListIcon = styled.div`
    justify-self: flex-end;
    margin: auto;
    padding-left: 1px;
`;


const Content = styled.span`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    text-align: center;
`;

