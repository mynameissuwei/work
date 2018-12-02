import React from 'react'
import axios from 'axios'
import { WingBlank,WhiteSpace,Card } from 'antd-mobile'
import { connect } from 'react-redux' 
import { withRouter } from 'react-router-dom'
import { tochSuccess } from '../../redux/Actions'

@withRouter 
@connect(
  state => state.person,
  { tochSuccess }
)
class UserInfo extends React.Component {
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
    axios.get(`/user/list?type=${userType}`).then(res => {
      this.props.tochSuccess(res.data)
    })
  }

  render() {
    return(
      <WingBlank>
        <WhiteSpace size="lg" />
        {this.props.data.map(item => 
          <div key={item._id}>
            <WhiteSpace size="sm" />
            <Card>
              <Card.Header 
              title={item.user}
              thumb={require(`../../images/${item.avator}.png`)}
              extra={<span>{item.job}</span>}	
              >
              </Card.Header>
              <Card.Body>
                <div>{item.demand}</div>
              </Card.Body>

              <Card.Footer content="大喵" extra={<div>荣誉学员</div>} />  
            </Card>
            <WhiteSpace size="sm" />
          </div>
        )}
      </WingBlank>
    )
  }
}

export { UserInfo }