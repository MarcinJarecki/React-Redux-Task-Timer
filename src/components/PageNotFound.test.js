import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import PageNotFound from './PageNotFound.js';

describe('<Footer />', ()=>{
    it ('should be render ' , () => {
        const wrapper = shallow(<PageNotFound />);
        expect(
            wrapper.find('h1').text()
        ).toEqual('Page Not Found.');
        expect(
            wrapper.find('div').length
        ).toEqual(1);
    });
})
