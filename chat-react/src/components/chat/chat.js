import React from 'react'
import { List,InputItem,Button } from 'antd-mobile'
import { getMsgList,sendMsg,recMsg } from '../../redux/Actions'
import { connect } from 'react-redux'




@connect(
  state => state,
  { getMsgList,sendMsg,recMsg }
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
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({ from,to,msg })
    this.setState({
      text:''
    })     
  }

  componentDidMount() {
    this.props.getMsgList()
    this.props.recMsg()
  }

  render() {
    return(
      <div>
        {this.props.chat.chatMsg.map(item => <p>{item.content}</p>)}
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