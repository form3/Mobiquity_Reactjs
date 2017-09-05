import React from 'react';
import { shallow } from 'enzyme';
import DriverProfile from './driver-profile';

const mockDriver = {
    driverId: 'hamilton',
    permanentNumber: '44',
    code: 'HAM',
    url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
    givenName: 'Lewis',
    familyName: 'Hamilton',
    dateOfBirth: '1985-01-07',
    nationality: 'British',
    isWorldChampion: true
};

const container = shallow(<DriverProfile driver={mockDriver} />);

describe('tests for the <DriverProfile /> component when driver does not have season results but is world champ', () => {
    it('should render with correct classname when driver is world champ', () => {            
        expect(container.hasClass('world-champ')).toEqual(true);
    });

    it('should not render the results block if result are not apart of the driver model', () => {    
        expect(container.find('.season-results').length).toEqual(0);        
    });
});

const mockDriverTwo = {
    driverId: 'hamilton',
    permanentNumber: '44',
    code: 'HAM',
    url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
    givenName: 'Lewis',
    familyName: 'Hamilton',
    dateOfBirth: '1985-01-07',
    nationality: 'British',
    isWorldChampion: false,
    results: {
        points: '381',
        wins: '10'
    }
};

const containerTwo = shallow(<DriverProfile driver={mockDriverTwo} />);

describe('tests for the <DriverProfile /> component when driver does have season results and is not world champ', () => {
    it('should render with correct classname when driver is not world champ', () => {            
        expect(containerTwo.hasClass('world-champ')).toEqual(false);
    });

    it('should not render the results block if result are not apart of the driver model', () => {    
        expect(containerTwo.find('.season-results').length).toEqual(1);        
    });
});