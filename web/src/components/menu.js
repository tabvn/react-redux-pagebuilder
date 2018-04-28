import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from '../history'

class Menu extends Component {

  constructor (props) {
    super(props)

    this._openPage = this._openPage.bind(this)
  }

  _openPage (link) {
    history.push(link.path)
  }

  render () {

    const {menu} = this.props
    const {items} = menu

    console.log('Menu items', items)

    return (
      <div className={'app-menu'}>
        <ul className={'menu'}>
          {
            items.map((link, index) => {
              return (
                <li key={index} onClick={() => this._openPage(link)}
                    key={index}><a>{link.title}</a></li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  menu: state.menu,
})

const mapDispatchToProps = (dispatch) => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu)