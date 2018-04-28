import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import BuilderElement from './index'

class RenderPageElement extends Component {

  render () {
    const {page} = this.props

    const allElements = _.get(page, 'elements', [])

    const elements = allElements.filter((e) => e.parent === null || !e.parent)
    return (
      <Fragment>
        {
          elements.map((element, index) => {
            return <BuilderElement page={page} key={index} element={element}/>
          })
        }
      </Fragment>
    )
  }
}

export default RenderPageElement