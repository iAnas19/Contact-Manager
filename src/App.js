import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, {Component} from 'react'
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import About from './components/page/About'
import AddContact from './components/contacts/AddContact'
import { Provider } from './context'


import 'bootstrap/dist/css/bootstrap.min.css'
import Error404 from './components/page/Error404'

class App extends Component {
  render(){

    return(
      <Provider>
        <Router>
          <div className='App'>
            <Header branding='Contact Manager' />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Contacts} />
                <Route exact path='/addcontacts' component={AddContact} />
                <Route exact path='/about' component={About} />
                <Route component={Error404} />
              </Switch>
            
            </div>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
