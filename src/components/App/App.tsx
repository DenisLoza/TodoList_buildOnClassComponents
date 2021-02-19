import React from "react"
import {AppHeader} from "../AppHeader/AppHeader"
import {SearchPanel} from "../SearchPanel/SearchPanel"
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter"
import {Todolist} from "../Todolist/Todolist"
import s from "./App.module.css"


export type itemsType =
  Array<{ id: string, label: string, important: boolean }>

const a: itemsType = [
  {id: "1", label: "Hello!", important: false},
  {id: "2", label: "My", important: true},
  {id: "3", label: "friend!", important: false}
]

export function App() {

  return (
    <div className={s.todoApp}>
      <AppHeader toDo={1} done={3}/>
      <div className={`${s.topPanel} d-flex`}>
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      <Todolist items={a}/>
    </div>
  )
}