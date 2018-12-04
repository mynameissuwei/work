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
      data:[],
      path:''
    }
  } 

  componentDidMount() {
    const pathname = this.props.location.pathname
    const userType = pathname.slice(1)
    var path = ''
    if(userType == 'genius') {
      path = 'boss'
    } else {
      path = 'genius'
    }
    this.setState({
      path
    })
    axios.get(`/user/list?type=${path}`).then(res => {
      this.props.tochSuccess(res.data)
    })
  }

  handle(v) {
    this.props.history.push(`chat/${v.user}`)
    window.location.href = window.location.href
  }

  render() {
    return(
      <WingBlank>
        <WhiteSpace size="lg" />
        {this.props.data.map(item => 
          <div key={item._id}>
            <WhiteSpace size="sm"/>
            <Card onClick={ (e) => this.handle(item,e) }>
              <Card.Header 
              title={item.user}
              thumb={require(`../../images/${item.avator}.png`)}
              extra={<span>Job:{item.job}</span>}	
              >
              </Card.Header>
              <Card.Body>
                <div>Demand:{item.demand}</div>
                {this.state.path == 'boss'? <div>
                                              <p>Company:{item.company}</p>
                                              <p>salary:{item.salary}</p>
                                            </div> : null
                }
              </Card.Body>
              {this.state.path == 'boss' ? <Card.Footer content="su" extra={<div>wei</div>} /> : 
                                           <Card.Footer content="wang" extra={<div>huan </div>} />    
              }  
            </Card>
            <WhiteSpace size="sm" />
          </div>
        )}
      </WingBlank>
    )
  }
}

export { UserInfo }