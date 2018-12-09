import React from 'react'
import { connect } from 'react-redux'
import browserCookie from 'browser-cookies'
import { WingBlank,WhiteSpace,Result,List,Modal,Redirect } from 'antd-mobile'
import Item from 'antd-mobile/lib/popover/Item';
import { logoutSuccess } from '../../redux/Actions'

@connect(
  state => state.user,
  { logoutSuccess }
)
class Me extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {

  }

  logOut() {
    const alert = Modal.alert;
    alert('Delete', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => {
        console.log(browserCookie.erase)
        browserCookie.erase('userid')
        this.props.logoutSuccess()
        window.location.href = window.location.href
      } },
    ])
  }

  render() {
    const userType = this.props.type
    const props = this.props
    const { Item } = List;

    return (
      props.type ? <div>
        <WhiteSpace size='lg'/>
        <WingBlank>
          
          <Result
            img={<img src={require(`../../images/${props.avator}.png`)} style={{width:50}} />}
            title={props.user}
            message={userType == 'boss' ? props.company : props.job}
          />

          <List renderHeader={() => 'Demand'}>
            <Item multipleLine>
              {props.demand}
            </Item>
          </List>

          <WhiteSpace size='lg'></WhiteSpace>

          <List onClick={this.logOut}>
            <Item>
              Logout
            </Item>
          </List>

        </WingBlank>
      </div> : null
    )
  }
}

export { Me }