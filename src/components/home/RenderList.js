import React from 'react'

export default function RenderList(props) {
    console.log(props)
    const {listData,deleteClick} = props
    console.log(listData,'data')
    const handleDeleteClick=(idList)=>{
        deleteClick(idList)
    }
    return (
        <div>
            {listData.map(item =>(<li key={item.id} onClick={()=>handleDeleteClick(item.id)}>{item.title}</li>))}
        </div>
    )
}
