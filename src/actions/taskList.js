export const addTask = (task) => {
  console.log('addTask:', task);
  return {
      type: 'ADD_TASK',
      task
  };
}

export const updateTask = (task) => {
  console.log('updateTask:', task);
  return {
      type: 'UPDATE_TASK',
      task
  };
}

export const deleteTask = (task) => {
  console.log('deleteTask', task);
  return {
    type: 'DELETE_TASK',
    task
  };
}

