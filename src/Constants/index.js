import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsArrowUpDown, BsXCircle } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { BiCurrentLocation, BiCamera } from 'react-icons/bi';
import { IoSwapVerticalSharp, IoBusSharp } from 'react-icons/io5';

export const Icons = {
    Plus : AiOutlinePlusCircle,
    UpDown: BsArrowUpDown,
    StartingPoint : BiCurrentLocation,
    X : BsXCircle,
    Location : ImLocation,
    Swap: IoSwapVerticalSharp,
}

/**
 * Data
 */
export const DowntownTour = {
    label: 'Downtown Tour',
    color: 'red'
}

export const BrooklynTour = {
    label: 'Brooklyn Tour',
    color: 'blue'
}

export const Harlem = {
    label: 'Uptown & Harlem Tour',
    color: 'lightblue'
}

export const NightTour = {
    label: 'Night Tour',
    color: 'purple'
}

export const Destinations = [{
    name: 'Port Authority',
    Icon: IoBusSharp,
    type: 'Bus Stops',
    busNumber: 17,
    address: '8th Ave btwn 42nd St & 43rd Street',
    labels: [DowntownTour, BrooklynTour, Harlem, NightTour]
}, 
{
    name: 'Times Square West',
    Icon: IoBusSharp,
    type: 'Bus Stops',
    busNumber: 3,
    address: '46th St btwn 7th Ave & 8th Ave off 8th..',
    labels: [DowntownTour, Harlem]
},
{
    name: 'Times Square',
    Icon: BiCamera,
    type: 'Attractions',
    address: '12 E 23rd St, New York, NY'
},
{
    name: 'Times Square Building',
    Icon: BiCamera,
    type: 'Attractions',
    address: '12 E 23rd St, New York, NY'
},
{
    name: 'Central Park',
    Icon: ImLocation,
    type: 'Parks',
    address: '12 E 23rd St, New York, NY'
},
{
    name: 'Battery Park',
    Icon: ImLocation,
    type: 'Parks',
    address: '12 E 23rd St, New York, NY'
},
{
    name: 'Metropolitan Museum',
    Icon: ImLocation,
    type: 'Museums',
    address: '12 E 23rd St, New York, NY'
},
{
    name: 'Brooklyn Museum',
    Icon: ImLocation,
    type: 'Museums',
    address: '12 E 23rd St, New York, NY'
}]