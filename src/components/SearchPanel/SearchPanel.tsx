import React from "react"
import s from "./SearchPanel.module.css"


export function SearchPanel() {
  return (
    <>
      <input type="text"
             placeholder="search"
             className={`form-control ${s.searchInput}`}
      />
    </>
  )
}