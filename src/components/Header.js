import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu: [
        {
          id: 0,
          url:'/parks',
          title: 'Parks',
          selected: false,
          key: 'menu'
        },
        {
          id: 1,
          url:'/cafes',
          title: 'Cafes',
          selected: false,
          key: 'menu'
        },
        {
          id: 2,
          url:'/happyhour',
          title: 'Happy Hour',
          selected: false,
          key: 'menu'
        },
        {
          id: 3,
          url:'/bars',
          title: `Bars`,
          selected: false,
          key: 'menu'
        }
      ]
    }
  }

  render(){
    return(
      <div className="header">
        <div className="logo">
          <Link to="/"><h1><span>Austin</span>ited</h1></Link>
        </div>
        <div className="right-nav">
          <Dropdown
            title="Menu"
            list={this.state.menu}
            toggleItem={this.toggleSelected}
            cartProducts={this.props.cartProducts}
          />
        </div>
      </div>
    )
  }
}

export default Header;
