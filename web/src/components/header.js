import React,{Component} from 'react'
import Menu from './menu'

class Header extends Component{


  render(){
    return (
      <div className={'app-header'}>
       <Menu />
      </div>
    )
  }
}

export default Header