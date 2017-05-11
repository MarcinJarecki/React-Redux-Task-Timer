export const addTask = (task) => {
  return {
      type: 'ADD_TASK',
      task
  };
}

export const updateTask = (task) => {
  return {
      type: 'UPDATE_TASK',
      task
  };
}

export const deleteTask = (task) => {
  return {
    type: 'DELETE_TASK',
    task
  };
}

