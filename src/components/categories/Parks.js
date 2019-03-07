import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Items from './Items'

class Parks extends Component {
  constructor(props) {
      super(props);
      this.state = {
        page: 0,
        limit: 1
      }
    }

  handleNext = () => {
    this.setState(prevState => {
        return {
          page: prevState.page + 1,
          limit: prevState.limit + 1,
        }
     })
  }

  handleBack = () => {
    this.setState(prevState => {
        return {
          page: prevState.page - 1,
          limit: prevState.limit - 1,
        }
     })
  }

  render(){
    const Length = {
      value: Items.filter(
          ({ category }) =>
            category === "Parks"
        ).length
    }
    return(
      <div className="category">
        <h1>Parks</h1>
        {Items.slice(this.state.page, this.state.limit).filter(
            ({ category }) =>
              category === "Parks"
          ).map((item, index) => {
            const note = {
              handle: item.handle,
            }
            const id = {
              value: item.id
            }
            const page = {
              value: this.state.page + 1
            }
            return (
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {this.state.page > 0 ? <button onClick={this.handleBack}>Back</button> : " " }
                {Length.value > page.value ? <button onClick={this.handleNext}>Next</button> : " " }
                {Images.filter(({handle}) => (
                  handle === note.handle
                )).map(({ image, handle }) => {
                  return(
                    <div>
                      <img src={image} alt={handle}/>
                    </div>
                  )
                })}
              </div>
            )
        })}
      </div>
    )
  }
}

export default Parks


const Images = [
  {image: require('../../assets/parks/zilker.png'), handle:"zilker"},
  {image: require('../../assets/parks/zilker.png'), handle:"bang"},
  {image: require('../../assets/parks/zilker.png'), handle:"bang"},
]
