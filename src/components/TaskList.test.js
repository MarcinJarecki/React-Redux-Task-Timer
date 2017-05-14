import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import TaskList from './TaskList.js';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

function setup() {

    let initialState = {taskList: {}};
    const mockStore  = configureMockStore()(initialState);
    const props = {};

    const wrapper = shallow(
        <Provider store={mockStore}>    
            <TaskList {...props} />
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
        wrapper = wrapperInstance.find(TaskList);
    })

    it('Should has <TaskList> component', ()=>{
        expect(
            wrapper.length
        ).toEqual(1);
    });

})