export const addTodo = (data) => {
    console.log(data,'action')
    return{
        type: "ADD_TODO",
        payload: data
    }
}

export const updateTodo = (updateData) => {
   
    return{
        type: "UPDATE_TODO",
        payload: updateData
    }
}
export const updateTask = (task) => {
   
    return{
        type: "UPDATE_TASK",
        payload: task
    }
}
