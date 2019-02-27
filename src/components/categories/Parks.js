import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Parks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: PARKS
    }
  }

  render(){
    const ParkItems = () => (
      <div className="parks">
        {this.state.parks
          .map(({ title, description, images, image,  url}) => (
            <Link to={{
              pathname: `/parks/${url}`,
              state: {
                title: {title},
                description: {description},
                images: {images},
                image: {image},
                url: {url}
              }
            }}
            title={title} description={description} image={image} images={images}
            >
              <div className="category-item">
                <h1>{title}</h1>
                <p>{description}</p>
                <img src={image} />
              </div>
            </Link>
          ))}
      </div>
    )

    return(
      <div className="category">
        <ParkItems />
      </div>
    )
  }
}

export default Parks


const PARKS = [
  {title: "Greenbelt: Spyglass Entrance", url:"spyglass", description: "This is an example description for a category to do with Austinited.",
    image: require("../../assets/barton.jpeg"),
    images: [
      {image: require("../../assets/barton.jpeg")},
      {image: require("../../assets/barton.jpeg")}
    ]
  },
  {title: "Greenbelt: Spyglass Entrance", url:"spyglass", description: "This is an example description for a category to do with Austinited.",
    image: require("../../assets/barton.jpeg"),
    images: [
      {image: require("../../assets/barton.jpeg")},
      {image: require("../../assets/barton.jpeg")}
    ]
  },
  {title: "Greenbelt: Spyglass Entrance", url:"spyglass", description: "This is an example description for a category to do with Austinited.",
    image: require("../../assets/barton.jpeg"),
    images: [
      {image: require("../../assets/barton.jpeg")},
      {image: require("../../assets/barton.jpeg")}
    ]
  },
  {title: "Greenbelt: Spyglass Entrance", url:"spyglass", description: "This is an example description for a category to do with Austinited.",
    image: require("../../assets/barton.jpeg"),
    images: [
      {image: require("../../assets/barton.jpeg")},
      {image: require("../../assets/barton.jpeg")}
    ]
  }
]
