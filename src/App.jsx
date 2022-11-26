import React, { useState, useRef } from 'react'

const App = () => {
  // const [todoText, setTodoText] = useState("")
  const todoTextRef = useRef("")
  const [todoList, setTodoList] = useState([])
  // const changeTodoText=(event)=>{
  //   console.log(event.target.value);
  //   setTodoText(event.target.value)
  // }
  const addTodo=(event)=>{
    event.preventDefault();
    const todoText = todoTextRef.current.value;
    setTodoList((val)=>[...val, todoText])
    todoTextRef.current.value="";

  }
  return (
    <>
      <div className="flex flex-col items-center mb-14">
        <h1 className="text-4xl font-bold m-10 ">Todo App</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Enter Todo"
            className=" text-black font-bold py-2 px-4 rounded border border-blue-500 rounded-r-none "
            // value={todoText}
            // onChange={changeTodoText}
            ref={todoTextRef}
          />
          <button
            type="submit"
            className="bg-blue-700  hover:bg-blue-900 text-white font-bold py-2 px-4 rounded rounded-l-none border border-blue-500"
          >
            addTodo
          </button>
        </form>
      </div>
      {/* <div className='border border-blue-900 opacity-40'></div> */}
      <div className=' flex flex-col items-start '>{todoList.map((item)=>{
          return <p className=' mb-2 text-black font-semibold text-md ml-4'>{item}</p>
        })}</div>
    </>
  )
}

export default App
