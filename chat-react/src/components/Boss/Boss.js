import React from 'react'
import axios from 'axios'
import { UserInfo } from '../userInfo/userInfo'

class Boss extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <UserInfo></UserInfo>
      </div>
    )
  }
}


export { Boss }