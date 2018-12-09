import React from 'react'
import { List,InputItem,Button,NavBar,Icon,Grid  } from 'antd-mobile'
import { getMsgList,sendMsg,recMsg,readMsg } from '../../redux/Actions'
import { connect } from 'react-redux'
import { getChatId } from '../../util'
import QueueAnim from 'rc-queue-anim'



@connect(
  state => state,
  { getMsgList,sendMsg,recMsg,readMsg }
) 
class Chat extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      text:'',
      msg:[],
      show:false
    }
  }

  handleConsole = () => {
    const from = this.props.user._id
    const to = this.props.match.params.user
    const msg = this.state.text
    this.props.sendMsg({ from,to,msg })

    this.setState({
      text:'',
      show:false
    })     
  } 

  componentDidMount() {
    if(!this.props.chat.chatMsg.length) {
      this.props.getMsgList()
      this.props.recMsg()
    }
  }

  componentWillUnmount() {
    const to = this.props.match.params.user    
    console.log(to)
    this.props.readMsg(to)
  }

  fix = () => {
    setTimeout(() => window.dispatchEvent(new Event('resize'),0))
  } 

  handleChange = () => {
    this.setState({
      show:!this.state.show
    })
    this.fix()
  }

  render() {
    const user = this.props.match.params.user
    const Item = List.Item
    const users = this.props.chat.users
    const chatId = getChatId(user,this.props.user._id)
    const chatmsgs = this.props.chat.chatMsg.filter(v=>v.chatid == chatId)
    const emoji = '🤨 🧐 🤓 😎 🤩 😒 😞 😟 🧑 🤒 😷 🤧 🤮 😹 😻 😼 😽 🙀 😿 😾 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜'.split(' ').map( (v) => ({
      text:v
    }))

    return(
      <div>

        <div id='chat-page'>
          <NavBar mode='dark'
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
          >
            {users[user]?users[user].name:null}
          </NavBar>

          <QueueAnim type='scale' delay={100}>
            {chatmsgs.map(v => {
              const avatar = require(`../images/${users[v.from].avatar}.png`)
              return  v.from==user ? (
                <List key={v._id}>
                  <Item
                    thumb={avatar}
                  >{v.content}</Item>
                </List>
              ) : (
                <List key={v._id}>
                  <Item
                    extra={<img src={avatar}/>}
                    className='chat-me'
                  >{v.content}</Item>
                </List>
              )
              })
            }
          </QueueAnim>  

        </div>

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
            extra={
              <div>
                <span onClick={this.handleChange} style={{marginRight:15}}>🤨</span>
                <span onClick={this.handleConsole}>click it</span>
              </div>
            }></InputItem>
          </List>
          {this.state.show ? <Grid data={emoji}
          columnNum={9}
          isCarousel={true}
          carouselMaxRow={4}
          onClick={(e) => {
            this.setState({
              text:this.state.text + e.text,
            })
          }}
        ></Grid> : null}
        </div>

      </div>
      )  
  }
}

export default Chat 