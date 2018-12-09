import React from 'react'
import { Icon } from 'antd-mobile'
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter } from 'react-router-dom'
//components
import { TabBarExample } from '../../components/Bottom/Bottom'
import { Boss } from '../../components/Boss/Boss'
import { Genius } from '../../components/genius/genius'
import { Msg } from '../../components/msg/msg'
import { Me } from '../../components/me/me'
import { Navbar } from '../../components/NavBar/NavBar'

@connect(state => state.user)
class DashBar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      pathname:''
    }
  }

  render() {
    const userType = this.props.type
    const data = [
      { 
        path:'/boss',
        title:'Genius List',
        icon:'boss',
        key:1,
        hide:userType != 'boss'
      },
      {
        path:'/genius',
        title:'Boss List',
        icon:'human',
        key:2,
        hide:userType != 'genius'
      },
      {
        path:'/msg',
        key:3,
        icon:'classic',
        title:'Message List',
      },
      {
        path:'/me',
        text:'me',
        icon:'my',
        key:4,
        title:'Me',
      }
    ]


    return (
      <Router>
        <Navbar NavList={data}></Navbar>
          <Route path='/boss' component={Genius}></Route>
          <Route path='/genius' component={Boss}></Route>
          <Route path='/msg' component={Msg}></Route>
          <Route path='/me' component={Me}></Route>                 
        <TabBarExample list={data}></TabBarExample>                      
      </Router>
    )
  }
}

export { DashBar }