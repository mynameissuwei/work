import React from 'react'
import { useState } from 'react'
import { TabBar } from 'antd-mobile'

const BottomBar = (props) => {

  const [count,setCount] = useState(0)
  console.log(props.list)  
  return (
    <div>
      <TabBar>

      </TabBar>
    </div>
  )
}

export { BottomBar }