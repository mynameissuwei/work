import React from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMsgList,sendMsg,recMsg } from '../../redux/Actions'

@withRouter
@connect(
  state => state.chat,
  {getMsgList,sendMsg,recMsg}
)
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div>
        
      </div>
    )
  }

  componentDidMount() {
    this.props.getMsgList()
    this.props.recMsg()
    console.log(this.props.unread)
  }



  render() {
    const pathName = this.props.location
    const NavList = this.props.list.filter(item => !item.hide)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          { NavList.map( item =>
            <TabBar.Item
              title={item.title}
              key="Life"
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
                this.state.selectedTab === 'blueTab'
              }
              badge={item.path == '/msg' ? this.props.unread : 0}
              onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
                  this.props.history.push(item.path)
              }}
              data-seed="logId"
            >
              {this.renderContent('Life')}
            </TabBar.Item> )
          }
        </TabBar>
      </div>
    );
  }
}

export { TabBarExample }