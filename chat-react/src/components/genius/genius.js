import React from 'react'
import axios from 'axios'
import { WingBlank,WhiteSpace,Card } from 'antd-mobile'
import { connect } from 'react-redux' 

import { UserInfo } from '../userInfo/userInfo'
import { tochSuccess } from '../../redux/Actions'

@connect(
  state => state.person,
  { tochSuccess }
)
class Genius extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  } 

  componentWillMount() {
    const pathname = this.props.location.pathname
    const userType = pathname.slice(1)
    console.log(userType)
    axios.get(`/user/list?type=genius`).then(res => {
      this.props.tochSuccess(res.data)
    })
  }

  render() {
    return(
      <UserInfo></UserInfo>
    )
  }
}

export { Genius }