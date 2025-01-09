"use client";
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    
    const handleClick = () => {
        if (input.trim() !== "") {
            setTodos((prevTodos) => [...prevTodos, input.trim()]);
            setInput("");
        } else {
            alert("Please enter a todo");
        }
    }
  return (
    <section className="w-screen h-screen ">
      <form className=" bg-gray-400  w-2/4 mx-auto  text-center my-5">
        <div className="flex mx-20 gap-20">
          <input
            type="text"
            placeholder="Add Todo"
            className=" p-2 border w-2/4 border-gray-300 rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="button" className="bg-gray-500 text-white rounded-md mt-2" onClick={handleClick}>
            Add Todo
          </button>
              </div>
              
              <section>
                  <ul>
                      {todos.map((todo, index) => {
                          return (
                              <li key={index} className="bg-gray-200 p-2 rounded-md mt-2">
                                  {todo}
                              </li>
                          )
                      })}
                  </ul>
              </section>
      </form>
    </section>
  );
};

export default Todo;
