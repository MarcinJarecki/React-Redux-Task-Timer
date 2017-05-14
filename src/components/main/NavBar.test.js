import React from 'react';
import ReactDOM from 'react-dom';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import NavBar from './NavBar.js';
import * as taskActions from './../../actions/taskList';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

function setupIsAuthenticatedFalse() {

    let initialState = {taskList: {}};
    const mockStore  = configureMockStore()(initialState);
    
    const props = {
        setAuthCookies: jest.fn(),
        setAuthStatus: jest.fn(),
        isAuthenticated: false
    }
    const wrapper = mount(
        <Provider store={mockStore}>    
            <NavBar {...props} />
        </Provider>
    )

    return {
        props,
        wrapper
    }
}

describe('<NavBar>', ()=> {
    let wrapper;
    let wrapperInstance;

    it('should contains <NavBar> component', ()=>{
       wrapperInstance = setupIsAuthenticatedFalse().wrapper;
       expect(
           wrapperInstance.find(NavBar).length
       ).toEqual(1);
    })

    describe('isAuthenticated === false', ()=> {

        beforeEach(()=> {
            wrapperInstance = setupIsAuthenticatedFalse().wrapper;
            wrapper = wrapperInstance.find(NavBar);
        })

        it ('should receive props isAuthenticated=false' , () => {      
            expect(
                wrapper.props().isAuthenticated
            ).toEqual(false);
        });

        it ('should render and has navbar with .navbar-default class' , () => {            
            expect(
                wrapper.find('.navbar-default').length
            ).toEqual(1);
        });

        it('should has button with .navbar-toggle class' , ()=>{            
            expect(
                wrapper.find('.navbar-toggle').is('button')
            ).toEqual(true);
        });

    })

    describe('login button', ()=> {
        beforeEach(()=> {
            wrapperInstance = setupIsAuthenticatedFalse().wrapper;
            wrapper = wrapperInstance.find(NavBar);
        })

        it('should has class .btn-success ' , ()=>{
            expect(
                wrapper.find('.btn-success').length
            ).toEqual(1);            
        });

        it('should has span with .glyphicon-log-in class' , ()=>{
            expect(
                wrapper.find('.glyphicon-log-in').length
            ).toEqual(1);
        });

        it('should  change button type to .btn-primary after click login button' , ()=>{
            wrapper.find('.btn-success').simulate("click");
            expect(
                wrapper.find('.btn-primary').length
            ).toEqual(1)    
        });
    })
});