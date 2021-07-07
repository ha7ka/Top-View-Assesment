import React from 'react';
import { LocationListInputItem } from './Molecules';
import { Icons } from '../Constants';
import styled from 'styled-components';

export const LocationSelectionSearch = ({
    inputs,
    fromLocation,
    addDestination,
    removeDestination,
    swapStarting,
    changeText
}) => {
    return (
        <MainContainer length={inputs.length}>
            <List>
                <LocationListInputItem 
                    length={1}
                    {...fromLocation}
                />
                {
                    inputs.map((item, index) => (
                        <LocationListInputItem 
                            key={`Destination-input-${index}`}
                            closeInput={()=>{removeDestination(index)}}
                            length={inputs.length}
                            index={index}
                            onChange={(e)=> changeText(index, e.target.value)}
                            {...item} 
                        />
                    ))
                }
                <LocationListInputItem
                    Icon={Icons.Plus}
                    listText="Add destination"
                    addDestination={addDestination}
                />
            </List>
            {
                (inputs.length === 1) &&  (
                    <SwapContainer>
                        <StyledSwap fontSize='18px' onClick={swapStarting}/>
                    </SwapContainer>
                )
            }
        </MainContainer>
       
    )
    
}

const List = styled.ul`
    list-style-type: none; 
`;

const MainContainer =  styled.div`  
    display:flex;
    margin-bottom: 0;
    &::after {
        content: "";
        display: table;
        clear: both;
    }

    width: 375px;

    @media (max-width: 629px) {
        width: 100vw;
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
            user-select: none;
`;

const SwapContainer = styled.div`
    display:flex;   
    flex-grow: 1;
    justify-content:flex-end;
`;

const StyledSwap = styled(Icons.Swap)`
    padding-top: 60px;
    margin-right: 11px;
`;



