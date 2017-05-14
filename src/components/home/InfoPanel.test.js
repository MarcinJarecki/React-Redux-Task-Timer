import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import InfoPanel from './InfoPanel.js';
import { Grid, Row, Col, Panel} from 'react-bootstrap';

describe('<InfoPanel />', ()=>{
    it ('should be render ' , () => {
        const wrapper = shallow(<InfoPanel />);
        expect(
            wrapper.find('.show-grid').length
        ).toEqual(1);
        expect(
            wrapper.find(Panel).length
        ).toEqual(3);
    });
})
