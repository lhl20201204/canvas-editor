import React, {  useState } from 'react'
import Left from './Layout/Left'
import Middle from './Layout/Middle'
import Right from './Layout/Right'
import { TabContext } from './context'
import { tabs } from './config'
import './index.less'
export default function Index() {
  const [cur, setCur ] = useState(0)
  return (
    <TabContext.Provider value={{cur, setCur}}>
      <div id="design">
      <Left> </Left>
      { cur > -1 && <Middle Comp={tabs[cur].icon}></Middle>}
      <Right></Right>
    </div>  
    </TabContext.Provider>
   
  )
}
