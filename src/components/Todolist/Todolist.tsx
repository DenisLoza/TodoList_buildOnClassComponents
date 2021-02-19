import React from "react"
import {TodolistItem} from "../TodolistItem/TodolistItem"
import s from "./Todolist.module.css"
import {itemsType} from "../App/App"


type TodolistType = {
  items: itemsType
}

export const Todolist: React.FC<TodolistType> = (
  {items}
) => {

  let list = items.map((i) => {
    // деструктуризация объекта {i}
    const {id, ...otherProps} = i
    return (
      <li key={i.id}
          className="list-group-item"
      >
        <TodolistItem item={otherProps}/>
      </li>
    )
  })

  return (
    <ul className={`list-group ${s.todoList}`}>
      {list}
    </ul>
  )
}