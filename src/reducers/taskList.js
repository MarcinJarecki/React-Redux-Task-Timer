export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                Object.assign({},action.task),
                ...state                
            ]
        case 'UPDATE_TASK':
            return state.map((task, index) => {
                if (task.id !== action.task.id) {return task}
                return {
                    ...task,
                    ...action.task
                }
            })
        case 'DELETE_TASK':
            return state.filter( (item, index) => item.id !== action.task.id);    
        default:
            return state;
    }
};