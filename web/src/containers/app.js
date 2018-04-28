import React,{Component} from 'react'
import Header from '../components/header'
import '../css/app.css'

import {history} from '../history'
import {Router, Route, Switch} from 'react-router-dom'

import Page from '../components/page'
class App extends Component{

  constructor (props){
    super(props)
  }

  render(){
    return (
      <div className={'app-container'}>
        <Header />
        <div className={'app-content'}>
          <Router history={history}>
            <Switch>
              <Route exact={true} path={'/'} component={Page} />
              <Route exact={true} path={'/:path'} component={Page} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}


export default App