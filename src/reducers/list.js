
const initState ={
    listData:[{title:'Nghe nhac',id:1}],
    idList:null
}
const listReducer=(state=initState,action) => {
    switch (action.type) {
        case 'add-new-list':{
            console.log(action.payload,'pauload')
            console.log(state.listData,'listDatastate')
            const newListData=state.listData.concat([{title:action.payload,id:Math.floor(Math.random() * 100)}])
            console.log(newListData,'newlist')
            console.log(state.listData,'listDatastate')
            return {
                ...state,
                listData:newListData,
               
        }}
        case 'delete-list':{
            const newListData =state.listData.filter(item => item.id!==action.payload)
            console.log(newListData,'delete')
            return {
                ...state,
                listData:newListData,
            }
        }
        default:{
            return state
        }
    }
}
export default listReducer