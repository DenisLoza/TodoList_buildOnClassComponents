import React from "react"
import {AppHeader} from "../AppHeader/AppHeader"
import {SearchPanel} from "../SearchPanel/SearchPanel"
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter"
import {Todolist} from "../Todolist/Todolist"
import s from "./App.module.css"
import {ItemAddForm} from "../ItemAddForm/ItemAddForm"
import {v1} from "uuid"

export type itemType = { id: string, label: string, important: boolean, done: boolean }
type todoDataType = {
  todoData: Array<itemType>
  filteredTask: "All" | "Active" | "Done"
  term: string
}
type propertyNameType = "important" | "done"

export class App extends React.Component<any, any> {

  state: todoDataType = {
    todoData: [
      {id: v1(), label: "Hello!", important: false, done: false},
      {id: v1(), label: "My", important: false, done: false},
      {id: v1(), label: "friends!", important: false, done: false}
    ],
    filteredTask: "All",
    term: ""
  }

  // Удаляем таску
  onDeleted = (id: string) => {
    this.setState((state: todoDataType) => {
      let filteredItems = this.state.todoData.filter(i => i.id !== id)
      return {
        todoData: filteredItems
      }
    })
  }
  // функция для создания новой шаблонной таски (используется для Добавления таски)
  createTodolistItem = (label: string) => {
    return {
      id: v1(), label: label, important: false, done: false
    }
  }
  // Добавляем таску
  addTask = (label: string) => {
    // защита от пустой строки
    if (label.trim().length !== 0) {
      this.setState((state: todoDataType) => {
        let newTask = this.createTodolistItem(label)
        let newTodoData = [...this.state.todoData, newTask]
        return {
          todoData: newTodoData
        }
      })
    }
  }
  // универсальная ф-ция замены булевого св-ва на противоположное в объекте из массива данных
  toggleProperty = (id: string, propertyName: propertyNameType) => {
    this.setState((state: todoDataType) => {
      let newTodoData = this.state.todoData.map(
        task => task.id === id ? {...task, [propertyName]: !task[propertyName]} : task)
      return {todoData: newTodoData}
    })
  }
  // Таска выполненна (невыполненна)
  onToggleDone = (id: string) => {
    this.toggleProperty(id, "done")
  }
  // Таска важная (неважная)
  onToggleImportant = (id: string) => {
    this.toggleProperty(id, "important")
  }
  // функция фильтрации тасок по условию (All, Active, Done)
  filteredTasks = (value: string, todoData: Array<itemType>) => {
    switch (value) {
      case "All":
        return todoData
      case "Active":
        return todoData.filter(item => !item.done)
      case "Done":
        return todoData.filter(item => item.done)
      default:
        return todoData
    }
  }
  // колбэк для изменения значения фильтра в стейте по нажатию кнопки в <ItemStatusFilter>
  onFilterChange = (valueFilter: string) => {
    this.setState((state: todoDataType) => ({filteredTask: valueFilter}))
  }
  // функция Поиска по названию таски
  search = (term: string, todoData: Array<itemType>) => {
    // если строка поиска пустая верни начальный массив данных
    if (term.length === 0) {
      return todoData
    }
    return todoData.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }
  // колбэк пробрасываем в <SearchPanel>
  onSearch = (term: string) => {
    this.setState({term})
  }


  render() {

    const {todoData, filteredTask, term} = this.state
    // количество выполненных( и невыполненных) тасок
    let doneCount = todoData.filter(task => task.done).length
    let todoCount = todoData.length - doneCount

    // таски отфильтрованны по поиску, а потом по фильтру (all, active, done)
    const visibleItems = this.filteredTasks(filteredTask, this.search(term, todoData))


    return (
      <div className={s.todoApp}>
        <AppHeader toDo={todoCount} done={doneCount}/>
        <div className={`${s.topPanel} d-flex`}>
          <SearchPanel onSearch={this.onSearch}/>
          <ItemStatusFilter valueFilterTasks={this.state.filteredTask}
                            onFilterChange={this.onFilterChange}
          />
        </div>
        <ItemAddForm addTask={this.addTask}/>
        <Todolist todoData={visibleItems}
                  onDeleted={this.onDeleted}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}
        />
      </div>
    )
  }
}