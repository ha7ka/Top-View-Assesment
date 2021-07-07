import React, { useState, useEffect } from 'react';
import { LocationSelectionSearch, DestinationListItem, FilterList } from './Components';
import styled from 'styled-components';
import { Icons, Destinations } from './Constants';

export default function App() {
  const [destination, setDestination] = useState(Destinations);

  const [fromLocation, setFromLocation] = useState({
    Icon: Icons.StartingPoint,
    value: 'Current Location',
    placeholder: 'Choose Starting Point',
    readonly: true
  });
  
  const [inputs, setInputs] = useState([
  {
    Icon : Icons.Location,
    value: '',
    placeholder: 'Choose destination',
  }]);

  const [filterValues, setFilter] = useState({
    'Bus Stops' : false,
    'Attractions' : false,
    'Parks': false,
    'Museums' : false
  });

  useEffect(()=>{
    let filteredDestinations = Destinations.filter(({type}) => {
      console.log(type, filterValues[type])
      return filterValues[type]
    });

    if(filteredDestinations.length === 0) setDestination(Destinations);
    else setDestination(filteredDestinations);
  },[filterValues]);

  const changeText = (index, text) => {
    const newInputs = [...inputs];

    newInputs[index].value = text;

    setInputs(newInputs);
  }

  const toggleFilter = (keyValue) => setFilter({
    ...filterValues,
    [keyValue] : !filterValues[keyValue]
  })

  const addDestination = () => { 
    if(inputs.length < 2) setInputs([
      ...inputs,
      {
        Icon : Icons.Location,
        value: '',
        placeholder: 'Choose destination' 
      }
    ]);
  }

  const removeDestination = (index) => {
    const newInputs = [...inputs];

    newInputs.splice(index, 1);

    if(newInputs[0].value !== 'Current Location') 
      setFromLocation({
        Icon: Icons.StartingPoint,
        value: 'Current Location',
        placeholder: 'Choose Starting Point',
        readonly: true
      });

    setInputs(newInputs);
  };
  
  /**Swap the Start and Destination */
  const swapStarting = () => {

    let newInput = [...inputs];

    newInput[0] = {...fromLocation, Icon : Icons.Location };

    setFromLocation({value: inputs[0].value, Icon: Icons.StartingPoint, placeholder: 'Choose destination' });

    setInputs(newInput);
  }

  return (
    <MainContainer>
      <PanelContainer>
          <BackIcon size='18px' />

          <LocationSelectionSearch 
            swapStarting={swapStarting}
            fromLocation={fromLocation}
            addDestination={addDestination} 
            inputs={inputs}
            removeDestination={removeDestination}
            changeText={changeText}
          />
          <FilterList 
            filterKeys={Object.keys(filterValues)}
            filterItems={filterValues}
            toggleFilter={toggleFilter}
          />
          <DestinationListContainer>
            {
              destination.map((value)=> (
                <DestinationListItem 
                  key={value.name}
                  {...value}
                />
              ))
            }
          </DestinationListContainer>
      </PanelContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`

  @media (min-width: 400px) {
      justify-content: center;
      align-content: center;
      padding-top: 20px;
  }
`;
;

const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 667px;

  @media (min-width: 400px) {
    border: 1px solid darkgray;
    margin: auto;
  }

  @media (max-width: 400px) {
      width: 100vw;
  }
`;

const DestinationListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 14px;
`;

const BackIcon = styled(Icons.BackArrow)`
  position: absolute;
  margin-top: 32px;
  margin-left: 19.75px;
`;

