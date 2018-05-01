import React,{Component} from 'react'
import {connect} from 'react-redux'
import _ from 'lodash'
import Builder from './elements/builder'

class Page extends Component{

  constructor (props){
    super(props)


    this.getPageByPath = this.getPageByPath.bind(this)
  }

  getPageByPath(path){

    const {pages} = this.props

    const page = pages.find((p) => p.path === path)
    return page
  }
  render(){
    const {match, pages} = this.props

    const path = _.trim(_.get(match, 'params.path', '/'))

    const page = this.getPageByPath(path)

    const pageTitle = _.get(page, 'title', '')
    const pageBody = _.get(page, 'body', '')
    return (
      <div className={'page-container'}>
        <h1>{pageTitle}</h1>
        <div className={'page-content'}>
          {
            pageBody
          }
        </div>
        <Builder page={page} />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.page,
})


const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

