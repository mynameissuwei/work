import React from 'react'
import { connect } from 'react-redux'
import { WingBlank,WhiteSpace,Result } from 'antd-mobile'


@connect(state => state.user)
class Me extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const userType = this.props.type
    const props = this.props
    console.log(userType)
    console.log(props.avator)
    return (
      props.type ? <div>
        <WingBlank>
        <Result
          img={<img src={require(`../../images/${props.avator}.png`)} />}
          title={props.user}
          message={userType == 'boss' ? props.company : props.job}
        />
        </WingBlank>
      </div> : null 
    )
  }
}

export { Me }