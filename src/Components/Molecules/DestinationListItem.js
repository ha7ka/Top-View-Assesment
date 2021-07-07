import React from 'react';
import styled from 'styled-components';

export const DestinationListItem = ({
    Icon,
    name,
    type,
    busNumber,
    address,
    labels,
    busColors
}) => {
    const margin = type === 'Bus Stops' ? '15px' :'13px';
    
    return ( 
        <StyledListItem>
            <Icon size="22px" style={{marginTop: margin, marginRight: '4px'}} />
            <InformationContainer>
                <InnerContent busStop={type === 'Bus Stops'}>
                    <CustomBusIcon>
                        {(type === 'Bus Stops') && <BusNumber busColors={busColors}><Number>{busNumber}</Number></BusNumber>}
                    </CustomBusIcon>
                    <LocationInfo>
                        <InfoItem fontsize="15px" fontWeight={600} color="#484848"  >{name}</InfoItem>
                        <InfoItem fontsize="12.5px" fontWeight={400} color="#5A5A5A">{address}</InfoItem>
                        <LabelContainer>
                            {
                                (labels && labels?.length > 0) && <>
                                {labels.map(({label, color}) => <Label color={color} key={label}><LabelText>{label}</LabelText></Label>)}
                                </>
                            }
                        </LabelContainer>
                    </LocationInfo>
                </InnerContent>
            </InformationContainer>
        </StyledListItem>
    )
};

const StyledListItem = styled.div`
    display: flex;
    margin-left: 6px;
    margin-bottom: 5px;
`;

const InformationContainer = styled.section`
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid lightgrey;
`;

const LocationInfo = styled.section`
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    margin-bottom: 15px;
`;

const InnerContent = styled.section`
    display: flex;
    height: ${props => props.busStop ? '102.43px': '39px'};

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
    color: #FFFFFF;
    margin: auto 8px;

    font-size: 12.5px;
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
    
    width: 30px;
    height: 30px;
    border-radius: 50%;

    background: conic-gradient(${props => (props.busColors.map(
        (color, index)=> `${color} 0 ${(index * (100/props.busColors.length)) + (100/props.busColors.length)}% ${(props.busColors.length - 1 !== index) ? ',' : ''}`
    ))});

    transform: rotate(45deg);
`;

const Number = styled.span`
    margin: auto;
    transform: rotate(-45deg);
    color: white;
    font-size: 17px;
    font-weight: 700;
`;

const CustomBusIcon = styled.div`
    margin-right: 5px;

    -webkit-touch-callout: none;
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    user-select: none;
`;
