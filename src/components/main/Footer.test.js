import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import Footer from './Footer.js';

describe('<Footer />', ()=>{

    it ('should render div with .navbar-default class' , () => {
        const wrapper = shallow(<Footer />);
        expect(
            wrapper.find('.navbar-default').length
        ).toEqual(1);
    });

    it ('should have two <a> link' , () => {
        const wrapper = shallow(<Footer />);
        expect(
            wrapper.find('a').length
        ).toEqual(2);
    });

    it ('should render two span with .fa class - Font Awesome ' , () => {
        const wrapper = mount(<Footer />);
        expect(
            wrapper.find('.fa').length
        ).toEqual(2);
    });
})
