import React from 'react'
import { NavBar,Icon } from 'antd-mobile'
import { HumanInfo } from '../HumanInfo/human';
import { user } from '../../redux/user-redux';

const boss = function () {
  return <h1>this is ok</h1>
}
class DashBar extends React.Component {

  constructor() {
    super()
  }

  render() {
    const pathname = this.props.location.pathname
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
        title:'Genius'
      },
      {
        path:'/me',
        title:'Me'
      },
      {
        path:'/msg',
        title:'Message'
      }
    ]

    // console.log( data.forEach(item => console.log(item.path))

    return (
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >{ data.find(item => item.path == pathname).title  }</NavBar>
    )
  }
}

export { DashBar }