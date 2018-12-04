import React from 'react'
import { List,InputItem,Button } from 'antd-mobile'
import { getMsgList } from '../../redux/Actions'
import { connect } from 'react-redux'
import io from 'socket.io-client';
const socket = io('ws://localhost:8090')

@connect(
  state => state,
  { getMsgList }
)
class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      msg:[]
    }
  }

  handleConsole = () => {
    socket.emit('sendMsg',{text:this.state.text})
    this.setState({
      text:''
    })     
  }

  componentDidMount() {
    socket.on('recMsg',(data) => {
      this.setState({
        msg:[...this.state.msg,data.text]
      })
    })
  }

  render() {
    return(
      <div>
        {this.state.msg.map(v => {
          return <p key='v'>{v}</p>
        })}
        <div className='stick-footer'>
          <List>
            <InputItem 
            placeholder='please input'
            value={this.state.text}
            onChange={(v) => {
              this.setState({
                text:v
              })
            }}
            extra={<span onClick={this.handleConsole}>click it</span>}></InputItem>
          </List>
        </div>
      </div>
    )
  }
}

export default Chat 