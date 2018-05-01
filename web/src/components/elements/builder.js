import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import BuilderElement from './index'
import Toolbar from '../toolbar'
import { connect } from 'react-redux'
import { updatePage } from '../../actions'

const isEditing = true

class Builder extends Component {

  render () {
    const {page} = this.props

    const allElements = _.get(page, 'elements', [])

    const elements = allElements.filter((e) => e.parent === null || !e.parent)
    return (
      <Fragment>
        {
          isEditing ? <Toolbar onChange={(page) => {

            console.log('Receive page change from children component is:', page)

            this.props.update(page)

          }} page={page} parentElement={null}/> : null
        }
        {
          elements.map((element, index) => {
            return <BuilderElement page={page} key={index} element={element}/>
          })
        }
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.page,
})

const mapDispatchToProps = (dispatch) => ({
  update: (page) => {
    dispatch(updatePage(page))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Builder)