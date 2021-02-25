import React, {ChangeEvent} from "react"
import s from "./SearchPanel.module.css"

type stateType = {
  term: string
}
type propsType = {
  onSearch: (term: string) => void
}

export class SearchPanel extends React.Component<propsType, any> {

  state = {
    term: ""
  }

  onValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    this.setState((state: stateType) => ({term}))
    this.props.onSearch(term)
  }

  render() {
    return (
      <>
        <input type="text"
               placeholder="type to search..."
               className={`form-control ${s.searchInput}`}
               value={this.state.term}
               onChange={this.onValueSearch}
        />
      </>
    )
  }
}
