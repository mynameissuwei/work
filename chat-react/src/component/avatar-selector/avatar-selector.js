import React,{ Component } from 'react';
import { Grid } from 'antd-mobile'

class AvatarSelector extends Component {
  constructor() {
    super()
    this.state = {
      hasAvator:false,
      avator:''
    }
  }

  render() {
    console.log(this.state.avator)
    const data = '3,4,5'.split(',').map(item => ({
      icon:require(`../avator-image/${item}.jpg`),
      text:item
    }))
    const gridHeader = this.state.hasAvator? (<div>
      <span>your avator is</span>
      <img src={this.state.avator} style={{width:20}}/>
    </div>) : (<div>
      <span>please choose your image</span>
    </div>)
    return (
      <div>
        {gridHeader}
        <Grid data={data} onClick={(el) => {
          this.props.selectAvator(el.text)
          this.setState({
            hasAvator:true,
            avator:el.icon
          })
        }}></Grid>
      </div>
    )
  }
}

export default AvatarSelector