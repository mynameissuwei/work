import React from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { connect } from 'react-redux';
import { BottomBar } from '../../components/BottomBar/BottomBar';

const boss = () => {
  return <h1>this is ok</h1>
}

const Human = () => {
  return <h1>this is good</h1>
}

const Genius = () => {
  return <h1>Genius</h1>
}

const Msg = () => {
  return <h1>Msg</h1>
}

const User = () => {
  return <h1>User</h1>
}

@connect(state => state)

class DashBar extends React.Component {

  constructor() {
    super()
  }

  render() {
    const pathname = this.props.location.pathname
    const user = this.props.user
    const data = [
      { 
        path:'/human',
        title:'Human',
        icon:'human',
        text:'牛人',
        Component:Human,
        hide:user.type == 'human'
      },
      {
        path:'/genius',
        title:'Genius',
        icon:'job',
        title:'BOSS列表',
        Component:Genius,
        hide:user.type=='genius'
      },
      {
        path:'/msg',
        text:'message',
        icon:'msg',
        title:'message list',
        Component:Msg
      },
      {
        path:'/me',
        text:'me',
        icon:'user',
        title:'个人中心',
        Component:User
      }
    ]


    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{ data.find(item => item.path == pathname).title  }</NavBar>
      
        <BottomBar list={data}></BottomBar>

      </div>
    )
  }
}

export { DashBar }