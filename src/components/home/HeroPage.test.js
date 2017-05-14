import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import HeroPage from './HeroPage.js';

describe('<HeroPage />', ()=>{
    it ('should be render ' , () => {
        const wrapper = shallow(<HeroPage />);
        expect(
            wrapper.find('.App-div').length
        ).toEqual(1);
        expect(
            wrapper.find('.App-hero-image').length
        ).toEqual(1);
    });
})
