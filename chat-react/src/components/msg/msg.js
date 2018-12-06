import React from 'react'
import { connect } from 'react-redux'
import { List } from 'antd-mobile'
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
    const value = Object.values(user)
    return (
      <div>
        {value.map(v => {
          const item = getLast(v)
          return (
            <List key={item._id}>
              <Item>
                {item.content}
                <Brief>王欢</Brief>
              </Item>
    
            </List>
          )
        })}
      </div>
    )
  }
}

export { Msg }
