import React from 'react';
import styled from 'styled-components';

export const DestinationListItem = ({
    Icon,
    name,
    type,
    busNumber,
    address,
    labels
}) => (
    <StyledListItem>
        <Icon size="22px" style={{marginTop: '4px'}} />
        <InformationContainer>
            <CustomBusIcon>
                {(type === 'Bus Stops') && <BusNumber labels={labels}><Number>{busNumber}</Number></BusNumber>}
            </CustomBusIcon>
            <LocationInfo>
                <InfoItem fontsize="1.2rem" fontWeight={700} >{name}</InfoItem>
                <InfoItem fontsize=".85rem" fontWeight={400} color="gray">{address}</InfoItem>
                <LabelContainer>
                    {
                        (labels && labels?.length > 0) && <>
                           {labels.map(({label, color}) => <Label color={color} key={label}><LabelText>{label}</LabelText></Label>)}
                        </>
                    }
                </LabelContainer>
            </LocationInfo>
        </InformationContainer>
    </StyledListItem>
);

const StyledListItem = styled.div`
    display: flex;
`;

const InformationContainer = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    margin-left: 20px;
    border-bottom: 1px solid lightgrey;
`;

const LocationInfo = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    height: 100%;
    margin-left: 20px;
    border-bottom: 1px solid lightgrey;
`;

const InfoItem = styled.span`
    font-size: ${props =>props.fontsize};
    font-weight: ${props =>props.fontWeight};
    color: ${props =>props.color};
`;

const LabelContainer = styled.section`
    display: inline-flex;
    flex-wrap: wrap;
`;

const Label = styled.div`
    margin: 6px;
    background-color: ${props=> props.color};
    border-radius: 10px;
`;

const LabelText = styled.p`
    text-align: center;
    color: white;
    margin: auto 8px;
    font-size: 14px;
    font-weight: 500;
    -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
            user-select: none;
`;

const BusNumber = styled.div`
    display: flex;
    overflow: hidden;

    align-content: center;
    justify-content: center;
    text-align: center;
    
    margin-top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background: conic-gradient(${props => (props.labels.map(
        (label, index)=> `${label.color} 0 ${(index * (100/props.labels.length)) + (100/props.labels.length)}% ${(props.labels.length - 1 !== index) ? ',' : ''}`
    ))});

    transform: rotate(45deg);
`;

const Number = styled.span`
    margin: auto;
    width: 25px;
    font-weight: 600;
    transform: rotate(-45deg);
    color: white;
`;

const CustomBusIcon = styled.div`
  -webkit-touch-callout: none;
    -webkit-user-select: none; 
     -khtml-user-select: none; 
            user-select: none;
`;
