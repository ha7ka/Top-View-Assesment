import React from 'react';
import { LocationListInputItem, FilterList } from './Molecules';
import { Icons } from '../Constants';
import styled from 'styled-components';

export const LocationSelectionSearch = ({
    inputs,
    fromLocation,
    addDestination,
    removeDestination,
    swapStarting,
    /**Filter List */
    filterKeys,
    filterItems,
    toggleFilter
}) => {
    return (
        <MainContainer>
            <ListContainer>
                <List>
                    <LocationListInputItem 
                        length={1} 
                        readonly 
                        {...fromLocation}
                    />
                    {
                        inputs.map((item, index) => (
                            <LocationListInputItem 
                                key={`Destination-input-${index}`}
                                closeInput={()=>{removeDestination(index)}}
                                length={inputs.length}
                                index={index}
                                readonly
                                {...item} 
                            />
                        ))
                    }
                    <LocationListInputItem
                        Icon={Icons.Plus}
                        listText="Add Destination"
                        addDestination={addDestination}
                    />
                </List>
                {
                    (inputs.length === 1) &&  (
                        <SwapContainer>
                            <Icons.Swap fontSize='18px' onClick={swapStarting}/>
                        </SwapContainer>
                    )
                }
            </ListContainer>
            <FilterList 
                filterKeys={filterKeys}
                filterItems={filterItems}
                toggleFilter={toggleFilter}
            />
        </MainContainer>
       
    )
    
}

const List = styled.ul`
    list-style-type: none; 
`;

const MainContainer =  styled.div`   
    &::after {
        content: "";
        display: table;
        clear: both;
    }

    width: 400px;

    @media (max-width: 629px) {
        width: 100vw;
    }
`;

const ListContainer= styled.div`
    display:flex;
`;


const SwapContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;

`;



