import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import Home from './Home.js';
import HeroPage from './home/HeroPage';
import InfoPanel from './home/InfoPanel';

describe('<Home />', ()=>{
    it ('should be render ' , () => {
        const wrapper = shallow(<Home />);
        expect(
            wrapper.find('div').hasClass('App')
        ).toEqual(true);
        expect(
            wrapper.find(HeroPage).length
        ).toEqual(1);
        expect(
            wrapper.find(InfoPanel).length
        ).toEqual(1);
    });
})
