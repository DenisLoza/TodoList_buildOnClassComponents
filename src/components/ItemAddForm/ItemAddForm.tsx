import React from "react"
import {ChangeEvent} from "react"
import s from "./ItemAddForm.module.css"


export type propsType = {
  addTask: (value: string) => void
}

export class ItemAddForm extends React.Component<propsType, any> {

  state = {
    label: ""
  }

  onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({label: e.target.value})
  }

  addTaskLabel = () => {
    this.props.addTask(this.state.label)
    this.setState({label: ""})
  }

  render() {

    let {label} = this.state

    return (
      <div className={`${s.ItemAddForm} d-flex`}>
        <input type="text"
               value={label}
               className="form-control"
               placeholder="enter new task name..."
               onChange={this.onLabelChange}
        />
        <button className="btn btn-outline-secondary"
                onClick={this.addTaskLabel}
        >
          Add Task
        </button>
      </div>
    )
  }
}