import React from "react"
import s from "./TodolistItem.module.css"


export type TodolistItemType = {
  item: { label: string, important: boolean }
}

export const TodolistItem: React.FC<TodolistItemType> = (
  {item}
) => {

  const style = {
    color: item.important ? "steelblue" : "black",
    fontSize: item.important ? "1.5rem" : "normal"
  }


  return (
    <span className={`${s.TodolistItem}`}>
      <span style={style}
            className={`${s.TodolistItemLabel}`}
      >
      {item.label}
    </span>
      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>
      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
  )
}