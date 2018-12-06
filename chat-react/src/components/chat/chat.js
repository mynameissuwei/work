import React from 'react'
import { List,InputItem,Button,NavBar,Icon,Grid  } from 'antd-mobile'
import { getMsgList,sendMsg,recMsg } from '../../redux/Actions'
import { connect } from 'react-redux'
import { getChatId } from '../../util'



@connect(
  state => state,
  { getMsgList,sendMsg,recMsg }
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
    })     
  } 

  componentDidMount() {
    if(!this.props.chat.chatMsg.length) {
      this.props.getMsgList()
      this.props.recMsg()
    }
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

    const data = Array.from(new Array(9)).map((_val, i) => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
      text: `name${i}`,
    }));
    console.log(chatmsgs)
    // console.log(this.props.chat.chatMsg)
    console.log(this.state.show)
    return(
      <div>

        <div id='chat-page'>
          <NavBar mode='dark'
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.goBack()}
          >
            {users[user]?users[user].name:null}
          </NavBar>

          {this.props.chat.chatMsg.map(v => {
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
              text:this.state.text + e.text
            })
          }}
        ></Grid> : null}
        </div>

      </div>
      )  
  }
}

export default Chat 