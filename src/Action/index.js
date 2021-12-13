export const addTodo = (data) => {
    console.log(data,'action')
    return{
        type: "ADD_TODO",
        payload: data
    }
}

export const updateTodo = (data, update) => {
   
    return{
        type: "UPDATE_TODO",
        payload: {data, update}
    }
}
// export const updateTask = (task) => {
   
//     return{
//         type: "UPDATE_TASK",
//         payload: task
//     }
// }
