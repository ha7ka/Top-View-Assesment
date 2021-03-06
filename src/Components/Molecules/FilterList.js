import React from 'react';
import styled from 'styled-components';
import { FilterLabel } from '../Atoms';

export const FilterList = ({
    filterItems,
    filterKeys,
    toggleFilter
}) => (
    <FilterListContainer>
        <FilterListStyled>
            {filterKeys.map((value) => (
                <FilterLabel
                    key={value}
                    labelText={value}
                    onClick={() => {toggleFilter(value)}}
                    active={filterItems[value]}
                />
            ) )}
        </FilterListStyled>
    </FilterListContainer>
)

const FilterListContainer = styled.div`
    display: flex;
    margin-top: 0px;
    width: 375px;


    -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
            user-select: none;
`;

const FilterListStyled = styled.div`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 100%;
    margin-top: 0;

    border-bottom: 2px solid #BFBFBF;
`;