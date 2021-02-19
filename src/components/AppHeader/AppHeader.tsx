import React from "react"
import s from "./AppHeader.module.css"


export const AppHeader: React.FC<{ toDo: number, done: number }> = (
  {toDo, done}
) => {

  return (
    <div className={`${s.appHeader} d-flex`}>
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
}