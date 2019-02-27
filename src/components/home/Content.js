import React, { Component } from 'react'
import HomeCategory from '../categories/HomeCategory'

class Content extends Component{

  constructor(props) {
    super(props)
    this.state = {
      categories: CATEGORIES
    }
  }

  render(){

    const Categories = ({ state: { categories } }) => (
      <div>
        {categories
          .map(({ title, description, image, url }) => (
            <HomeCategory title={title} description={description} image={image} url={url} />
          ))}
      </div>
    )

    return(
      <div className="content">
        <Categories state={this.state}/>
      </div>
    )
  }
}

// data
const CATEGORIES = [
  { title: "Parks", url: "parks", description: "This is an example description for a category to do with Austinited."},
  { title: "Cafes", url:"cafes", description: "This is an example description for a category to do with Austinited."},
  { title: "Happy Hour", url:"happyhour", description: "This is an example description for a category to do with Austinited."},
  { title: "Cafes", description: "This is an example description for a category to do with Austinited."},
]

export default Content;
