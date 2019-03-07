import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Items from './Items'

class Cafes extends Component {
  render(){
    return(
      <div className="category">
        {Items.filter(
            ({ category }) =>
              category === "Cafes"
          ).map((item, index) => {
            return <h1>{item.title} - {item.category}</h1>
        })}
      </div>
    )
  }
}

export default Cafes
