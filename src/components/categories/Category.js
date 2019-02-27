import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

class HomeCategory extends Component {
  render(){
    return(
      <div className="category">
        <div className="category-title">
          <h2>{this.props.title}</h2>
        </div>
        <div className="category-description">
          <p>{this.props.description}</p>
        </div>
        <Link to={`/category/${this.props.title}`} title={this.props.title}>
          <div className="category-image">
            <img src={this.props.image}/>
          </div>
        </Link>
      </div>
    )
  }
}

export default HomeCategory
