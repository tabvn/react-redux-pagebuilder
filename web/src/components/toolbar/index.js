import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import uuid from 'uuid/v1'

const Wrapper = styled.div `
 
  margin: 20px;
  padding: 0;
  background: rgba(0,0,0,0.03);
  
  ul{
    margin: 0;
    padding: 0;
    li {
      color: blue;
      cursor: pointer;
      padding: 3px 8px;
      margin: 0;
      display: inline-block;
    }
  }

`

export default class Toolbar extends Component {

  constructor (props) {
    super(props)

    this._onAddElement = this._onAddElement.bind(this)
  }

  _handleCreateRow(parentElement){

    return {
      id: this.autoId(),
      type: 'row',
      options: {
        container: 'container-fluid',
      },
      parent: _.get(parentElement, 'id', null),
    }
  }
  /**
   * Handle add new element
   * @param elementType
   * @param parentElement
   * @private
   */
  _onAddElement (elementType, parentElement) {

    let {page} = this.props

    let pageElements = _.get(page, 'elements', [])

    let newElement = null

    switch (elementType) {

      case 'row':

        newElement = this._handleCreateRow(parentElement)

        break

      case 'column':

        // let add row first, then add new column

        const newRow = this._handleCreateRow(parentElement)
          // push new row to pageElements

        pageElements.push(newRow)

        newElement = {
          type: 'column',
          id: this.autoId(),
          options: {
            responsive:{
              extraSmall: 4,
            }
          },
          parent: newRow.id,
        }

        break


      case 'p':

        newElement = {
          type: 'p',
          options: {
            text: "Sample text...."
          },
          parent: _.get(parentElement, 'id', null)
        }
        break

      default:

        break
    }

    if (newElement) {
      pageElements.push(newElement)
      //page.elements = pageElements
      page = _.setWith(page, 'elements', pageElements)
      if (this.props.onChange) {

        this.props.onChange(page)
      }
    }

  }

  autoId () {

    return uuid()
  }

  render () {
    const {parentElement} = this.props

    const actionsItems = [
      {
        type: 'row',
        title: 'Add row',
      },
      {
        type: 'column',
        title: 'Add column',
      },
      {
        type: 'p',
        title: 'Add Text'
      }
    ]
    return (
      <Wrapper>
        <ul>
          {
            actionsItems.map((actionItem, index) => {

              return (
                <li onClick={() => this._onAddElement(actionItem.type,
                  parentElement)} key={index}>{actionItem.title}</li>
              )
            })
          }
        </ul>
      </Wrapper>
    )
  }
}