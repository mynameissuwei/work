import React from 'react'
import { NavBar,Icon,WingBlank,WhiteSpace } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let pathName = this.props.location.pathname
    return (

      <WingBlank>
        
        <WhiteSpace size='sm'></WhiteSpace>

        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
        >
        {this.props.NavList.find(item => item.path === pathName).title  }
        </NavBar>
      </WingBlank>

    )
  }
}

export { Navbar }
