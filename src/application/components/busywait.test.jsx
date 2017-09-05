import React from 'react';
import { shallow } from 'enzyme';
import BusyWait from './busywait';

const container = shallow(<BusyWait isBusy={true} />);

describe('tests for the <BusyWait /> component when busy', () => {
    it('should render one wrapping element with the correct className', () => {            
        expect(container.hasClass('ui-fading-circle')).toEqual(true);
    });

    it('should render the dom structure that will animate', () => {    
        expect(container.find('div').length).toEqual(14);        
    });
});

const unbusyContainer = shallow(<BusyWait isBusy={false} />);

describe('tests for the <BusyWait /> component when not busy', () => {
    it('should not render the dom structure that will animate', () => {    
        expect(unbusyContainer.find('div').length).toEqual(0);        
    });
});