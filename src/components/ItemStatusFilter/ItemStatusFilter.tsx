import React from "react"


type ItemStatusFilterType = {
  valueFilterTasks: string
  onFilterChange: (value: string) => void
}

export class ItemStatusFilter extends React.Component<ItemStatusFilterType, {}> {

  buttons = [
    {name: "All", label: "All"},
    {name: "Active", label: "Active"},
    {name: "Done", label: "Done"}
  ]

  render() {

    const {valueFilterTasks, onFilterChange} = this.props

    // мапим массив и у нас получается три кнопки
    const buttons = this.buttons.map(({name, label}) => {
      // создаем переменную, которая будет хранить значение true, если значение фильтра из стейта
      // совпадет с именем кнопки
      const isActive = valueFilterTasks === name
      // если значение true, то передаем активный класс на кнопку
      const clazz = isActive ? "btn-info" : "btn-outline-secondary"
      return (
        <button key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => {onFilterChange(name)}}
        >{label}</button>
      )
    })

    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

// export const ItemStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <button type="button"
//               className="btn btn-info">All</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Active</button>
//       <button type="button"
//               className="btn btn-outline-secondary">Done</button>
//     </div>
//   )
// }