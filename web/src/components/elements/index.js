import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

const themeSettings = {
  defaultColor: 'black',
  defaultFontSize: '14px',
  defaultH2FontSize: '20px',
  defaultH3FontSize: '18px',
  defaultH4FontSize: '16px',
  defaultH5FontSize: '15px',
  defaultH6FontSize: '14px',
}

const P = styled.p`
  font-size: 14px;
  color: blue;
`

const H2 = styled.h2 `
  font-size: ${props => _.get(props, 'options.style.fontSize',
  themeSettings.defaultH2FontSize)};
  color: ${props => _.get(props, 'options.style.color',
  themeSettings.defaultColor)}
`
const H3 = styled.h3 `
  font-size: ${props => _.get(props, 'options.style.fontSize',
  themeSettings.defaultH3FontSize)};
  color: ${props => _.get(props, 'options.style.color',
  themeSettings.defaultColor)}
`

const H4 = styled.h4 `
  font-size: ${props => _.get(props, 'options.style.fontSize',
  themeSettings.defaultH4FontSize)};
  color: ${props => _.get(props, 'options.style.color',
  themeSettings.defaultColor)}
`

const H5 = styled.h5 `
  font-size: ${props => _.get(props, 'options.style.fontSize',
  themeSettings.defaultH5FontSize)};
  color: ${props => _.get(props, 'options.style.color',
  themeSettings.defaultColor)}
`

const H6 = styled.h6 `
  font-size: ${props => _.get(props, 'options.style.fontSize',
  themeSettings.defaultH6FontSize)};
  color: ${props => _.get(props, 'options.style.color',
  themeSettings.defaultColor)}
`

const Row = styled.div `

`

const Column = styled.div `
  border: 1px solid rgba(0,0,0,0.04);
  min-height: 30px;
`

class BuilderElement extends Component {

  constructor (props) {

    super(props)

    this._renderElement = this._renderElement.bind(this)
    this._renderRowElement = this._renderRowElement.bind(this)
    this._renderColumnElement = this._renderColumnElement.bind(this)
  }

  _renderColumnElement (columnElement) {

    const {page} = this.props
    const allElements = _.get(page, 'elements', [])

    const childrenElements = allElements.filter(
      (e) => e.parent === columnElement.id)

    return childrenElements.map((e, index) => {
      return <Fragment key={index}>{this._renderElement(e)}</Fragment>
    })

  }

  _renderRowElement (element) {

    const {page} = this.props
    const allElements = _.get(page, 'elements', [])

    let output = null
    const rowContainer = _.get(element, 'options.container', null)
    const id = _.get(element, 'id')

    const columns = allElements.filter(
      (e) => e.type === 'column' && e.parent === id)

    const row = <Row className={'row'}>
      {
        columns.map((column, index) => {

          const responsive = _.get(column, 'options.responsive')
          const extraSmall = _.get(responsive, 'extraSmall', null)
          const small = _.get(responsive, 'small', null)
          const medium = _.get(responsive, 'medium', null)
          const large = _.get(responsive, 'large', null)
          const extraLarge = _.get(responsive, 'extraLarge', null)

          let classes = []
          if (extraSmall) {
            classes.push(`col-${extraSmall}`)
          }
          if (small) {
            classes.push(`col-sm-${small}`)
          }
          if (medium) {
            classes.push(`col-md-${medium}`)
          }
          if (large) {
            classes.push(`col-lg-${large}`)
          }
          if (extraLarge) {
            classes.push(`col-xl-${extraLarge}`)
          }

          return <Column className={_.join(classes, ' ')}
                         key={index}>{this._renderColumnElement(column)}</Column>
        })
      }
    </Row>
    if (rowContainer) {
      output = <div className={rowContainer}>{row}</div>
    } else {
      output = row
    }

    return output
  }

  _renderElement (element) {

    const type = _.get(element, 'type')
    const options = _.get(element, 'options')

    let output = null
    const text = _.get(element, 'options.text', null)

    switch (type) {

      case 'p':
        if (text && text !== '') {
          output = <P>{text}</P>
        }

        break

      case 'h2':

        output = <H2 options={options}>{text}</H2>

        break

      case 'h3':

        output = <H3>{text}</H3>

        break

      case 'h4':

        output = <H4>{text}</H4>

        break

      case 'h5':

        output = <H5>{text}</H5>

        break

      case 'h6':

        output = <H6>{text}</H6>

        break

      case 'row':

        output = this._renderRowElement(element)
        break

      case 'column':

       output = this._renderColumnElement(element)

        break

      default:

        break
    }

    return output
  }

  render () {

    const {element} = this.props

    return (
      <Fragment>
        {
          this._renderElement(element)
        }
      </Fragment>
    )
  }
}

export default BuilderElement