import React from "react"
import s from "./TodolistItem.module.css"


export type propsType = {
  item: { label: string, important: boolean, done: boolean }
  onDeleted: () => void
  onToggleDone: () => void
  onToggleImportant: () => void
}


export class TodolistItem extends React.Component<propsType, {}> {

  render() {

    // в классах пропсы достаются из this.props, state соответсвенно из this.state
    const {item} = this.props

    const styleSpan = {
      color: item.important ? "green" : "black",
      fontSize: item.important ? "22px" : "20px",
      textDecoration: item.done ? "line-through" : "none",
    }

    return (
      <span className={`${s.TodolistItem}`}>
      <span style={styleSpan}
            className={`${s.TodolistItemLabel}`}
            onClick={this.props.onToggleDone}
      >
      {item.label}
    </span>
      <button type="button"
              onClick={this.props.onToggleImportant}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation"/>
      </button>
      <button type="button"
              onClick={this.props.onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o"/>
      </button>
    </span>
    )
  }
}

// export const TodolistItem: React.FC<TodolistItemType> = (
//   {item}
// ) => {
//
//   const style = {
//     color: item.important ? "steelblue" : "black",
//     fontSize: item.important ? "1.5rem" : "normal"
//   }
//
//
//   return (
//     <span className={`${s.TodolistItem}`}>
//       <span style={style}
//             className={`${s.TodolistItemLabel}`}
//       >
//       {item.label}
//     </span>
//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation"/>
//       </button>
//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o"/>
//       </button>
//     </span>
//   )
// }