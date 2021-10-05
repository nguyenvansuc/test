export const addNewList=(newList) => {
    return{
        type:'add-new-list',
        payload: newList,
    }
}


export const deleteList=(idList) => {
    return{
        type:'delete-list',
        payload: idList,
    }
}