import { useState } from 'react';
import './App.css';
import Conditions from './components/conditions/Conditions';
import Props from './components/props/Props' 
import State from './components/state/State';
import Addtodo from './components/todo/addtodo/Addtodo';
import Edittodo from './components/todo/edittodo/Edittodo';
import Todolist from './components/todo/todolist/Todolist';

function App() {
  const [works, setWorks] = useState([])
  const [editModal, setEditModal] = useState(false)
  const [currentWord, setCurrentWork] = useState({})
  const funcForadding = (newTodo)=>{
    // console.log(newTodo);
    newTodo.status = true
    newTodo.id = Date.now()
    let arr = [...works]
    arr.push(newTodo)
    setWorks(arr)
  }
  const deleteTodo = (id)=>{
    let arr = works.filter(item => {
      return item.id !== id
    })
    setWorks(arr)
  }
  const funcForEdit = (workForEdit)=>{
    setEditModal(true)
    setCurrentWork(workForEdit)
  }
  const saveEdit = (newWork)=> {
    let arr = works.map(
      item => {
        if(item.id === newWork.id){
          return newWork
        }
      else{
        return item
      }
    }
      )
    setWorks(arr)
  }
const changeStatus = (id)=>{
  let arr = works.map(item=>{
    if(item.id===id){
      item.status = !item.status
    }
    return item
  })
  setWorks(arr)
}
  return (
    <div className="App">
      <Addtodo funcForadding={funcForadding} />
     <Todolist changeStatus={changeStatus} deleteTodo={deleteTodo} works={works} funcForEdit={funcForEdit} />
     {
       editModal ? <Edittodo setEditModal={setEditModal} saveEdit={saveEdit} currentWord={currentWord} /> : null
     }

     {/* <Conditions /> */}
    </div>
  );
}

export default App;
