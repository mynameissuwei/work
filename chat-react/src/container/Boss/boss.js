import React from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom'
//components
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { TabBarExample } from '../../components/Bottom/Bottom'
import { Boss } from '../../components/Boss/Boss'
import { Genius } from '../../components/genius/genius'
import { Msg } from '../../components/msg/msg'
import { Me } from '../../components/me/me'

@connect(state => state.user)
class DashBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pathname = this.props.location.pathname
    const userType = this.props.type
    const data = [
      { 
        path:'/boss',
        title:'Genius',
        icon:'boss',
        key:1,
        hide:userType != 'boss'
      },
      {
        path:'/genius',
        title:'Boss',
        icon:'human',
        key:2,
        title:'Genius',
        hide:userType != 'genius'
      },
      {
        path:'/msg',
        key:3,
        icon:'classic',
        title:'message list',
      },
      {
        path:'/me',
        text:'me',
        icon:'my',
        key:4,
        title:'me',
      },
    ]


    return (
      <Router>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >{ data.find(item => item.path == pathname).title  }
          </NavBar>
          
          <Route path='/boss' component={Genius}></Route>
          <Route path='/genius' component={Boss}></Route>
          <Route path='/msg' component={Msg}></Route>
          <Route path='/me' component={Me}></Route>
            
          <TabBarExample list={data}></TabBarExample>        

        </div>
      </Router>
    )
  }
}

export { DashBar }