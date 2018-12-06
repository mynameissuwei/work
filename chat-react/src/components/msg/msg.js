import React from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'
import { getLast } from '../../util'

@connect(state => state)
class Msg extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const chatMsg = this.props.chat.chatMsg
    const user = {}
    chatMsg.forEach( v => {
      user[v.chatid] = user[v.chatid] || []
      user[v.chatid].push(v)
    })
    const Item = List.Item;
    const Brief = Item.Brief;

    const value = Object.values(user).sort( (a,b) => {
      const a_last = getLast(a).create_time
      const b_last = getLast(b).create_time
      return b_last - a_last
    })

    const userId = this.props.user._id
    return (
      <div>
        {value.map(v => {
          console.log(v)
          const item = getLast(v)
          const userIdCard =  item.from == userId ? item.from : item.to
          const unreadNum = v.filter(v => !v.read && v.to==userId).length
          return (
            <List key={item._id}>
              <Item
                extra={<Badge text={unreadNum}></Badge>}
                arrow='horizontal'
                onClick={() => {
                  this.props.history.push(`/chat/${userIdCard}`)
                  window.location.href = window.location.href
                }}
              >
                {item.content}
                <Brief>{this.props.chat.users[userIdCard].name}</Brief>
              </Item>
    
            </List>
          )
        })}
      </div>
    )
  }
}

export { Msg }
