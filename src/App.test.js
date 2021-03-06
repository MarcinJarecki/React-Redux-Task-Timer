import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import App from './App.js';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

function setup() {

    let initialState = {taskList: {}};
    const mockStore  = configureMockStore()(initialState);
    const props = {};

    const wrapper = shallow(
        <Provider store={mockStore}>    
            <App {...props} />
        </Provider>
    )

    return {
        props,
        wrapper
    }
}

describe('should be have <App>', ()=>{
    let wrapper;
    let wrapperInstance;

     beforeEach(()=> {
        wrapperInstance = setup().wrapper;
    })

    it('Should has <App> component', ()=>{
        expect(
            wrapperInstance.find(App).length
        ).toEqual(1);
    });
})