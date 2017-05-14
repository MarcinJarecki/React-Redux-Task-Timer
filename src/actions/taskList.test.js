import * as actions from './taskList.js'

describe('actions - taskList', ()=>{
    const task = {
            id: 1,  
            description : 'Task description',
            finishTime: 12,
            startTime: 1,
            durationTime: 12
    };

    it('should create an action to add task', ()=>{
        const expectedAction = {
            type: 'ADD_TASK',
            task
        }  
        expect(
            actions.addTask(task)
        ).toEqual(expectedAction);    
    });

    it('should create an action to update task', ()=>{
        const expectedAction = {
            type: 'UPDATE_TASK',
            task
        }  
        expect(
            actions.updateTask(task)
        ).toEqual(expectedAction);    
    });

    it('should create an action to delete task', ()=>{
        const expectedAction = {
            type: 'DELETE_TASK',
            task
        }  
        expect(
            actions.deleteTask(task)
        ).toEqual(expectedAction);    
    });
});