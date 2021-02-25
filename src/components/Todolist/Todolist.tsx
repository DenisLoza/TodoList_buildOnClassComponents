import React from "react"
import s from "./Todolist.module.css"
import {TodolistItem} from "../TodolistItem/TodolistItem"
import {itemType} from "../App/App"


type itemsType = Array<itemType>

type TodolistType = {
  todoData: itemsType
  onDeleted: (id: string) => void
  onToggleDone: (id: string) => void
  onToggleImportant: (id: string) => void
}

export class Todolist extends React.Component<TodolistType, any> {

  render() {

    const {todoData} = this.props

    let list = todoData.map((i) => {
      // деструктуризация объекта {i}
      const {id, ...otherProps} = i
      return (
        <li key={i.id}
            className="list-group-item"
        >
          <TodolistItem item={otherProps}
                        onDeleted={() => this.props.onDeleted(i.id)}
                        onToggleDone={() => this.props.onToggleDone(i.id)}
                        onToggleImportant={() => this.props.onToggleImportant(i.id)}
          />
        </li>
      )
    })

    return (
      <ul className={`list-group ${s.todoList}`}>
        {list}
      </ul>
    )
  }
}

// export const Todolist: React.FC<TodolistType> = (
//   {items}
// ) => {
//
//   let list = items.map((i) => {
//     // деструктуризация объекта {i}
//     const {id, ...otherProps} = i
//     return (
//       <li key={i.id}
//           className="list-group-item"
//       >
//         <TodolistItem item={otherProps}/>
//       </li>
//     )
//   })
//
//   return (
//     <ul className={`list-group ${s.todoList}`}>
//       {list}
//     </ul>
//   )
// }