import React from 'react'
import { useState } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter,Router } from 'react-router-dom'

@withRouter
class BottomBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    }
  }

  render() {
    const pathName = this.props.location
    const NavList = this.props.list.filter(item => !item.hide)
    return (
      <div>
        <TabBar 
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        >
          {
            NavList.map(v => <TabBar.Item 
              title={v.title} 
              key={v.key}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selected={ 
                pathName == v.path
              }
              onPress={ () => {
                this.props.history.push(v.path)
                }
              }
            >
              
              </TabBar.Item>)
          }
        </TabBar>
    </div>
  )
  }
}

export { BottomBar }