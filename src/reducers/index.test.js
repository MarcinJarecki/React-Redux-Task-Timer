import { combineReducers } from 'redux';
import indexReducer from './index';
import taskList from './taskList';

describe('index reducer', ()=>{
    const task = {
            id: 1,  
            description : 'Task description',
            finishTime: 12,
            startTime: 1,
            durationTime: 12
    };

    const initialState = {
        taskList: []
    }

    const initialStateWithData = {
        taskList: [task]
    }

    const updateDataTask = {
        id: 1,
        description: 'Change description',
        durationTime: 100 
    }

    it('should handle addTask', ()=>{
        expect(
            indexReducer(initialState, {
                type: 'ADD_TASK',
                task
            }).taskList    
        ).toEqual([task]);
    });

    it('should handle updateTask', ()=>{
        expect(
            indexReducer(initialStateWithData, {
                type: 'UPDATE_TASK',
                task: updateDataTask
            }).taskList    
        ).toEqual([{...task, ...updateDataTask}]);
    });

    it('should dont update taks when id dont exist - updateTask', ()=>{
        expect(
            indexReducer(initialStateWithData, {
                type: 'UPDATE_TASK',
                task: {id: 10}
            }).taskList    
        ).toEqual([{...task}]);
    });

    it('should handle deleteTask', ()=>{
        expect(
            indexReducer(initialStateWithData, {
                type: 'DELETE_TASK',
                task
            }).taskList    
        ).toEqual([]);
    });
});