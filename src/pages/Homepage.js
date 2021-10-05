import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewList,deleteList } from '../actions/list';

import RenderList from '../components/home/RenderList';
export default function Homepage() {
  const state = useSelector((state) => state);
  console.log(state, 'state');
  const listData = useSelector((state) => state.list.listData);
  const dispatch = useDispatch();
  console.log(listData);
  const inputRef=React.useRef()
  const handleClick =(value) => {
      console.log(value);
      dispatch(addNewList(value))
  }
  console.log(addNewList('abd'))
  const deleteClick=(idList)=>{
    console.log(idList);
    dispatch(deleteList(idList))
  }
  return (
    <div>
      <h1>Homepage</h1>
      <RenderList listData={listData} deleteClick={deleteClick}/>
      <label>Create new list</label>
      <input ref={inputRef} type="text" />
      <button onClick={()=>handleClick(inputRef.current.value)}>Create</button>
    </div>
  );
}
