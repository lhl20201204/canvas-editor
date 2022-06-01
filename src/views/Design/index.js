import React, {  useState } from 'react'
import Left from './Layout/Left'
import Middle from './Layout/Middle'
import Right from './Layout/Right'
import { UtilModalContext, ContentContext } from './context'
import { tabs } from './config'
import './index.less'
export default function Index() {
  const [toolbarIndex, setToolbarIndex ] = useState(0)
  const [ selectedId, setSelectedId ] = useState(0)
  const [ canvasList, setCanvasList ] = useState(new Array(40).fill(0).map(v => ({
    id: Math.floor(Math.random() * 100000000)
  })))
  return (
    <ContentContext.Provider value={{
      canvasList, 
      setCanvasList,
      selectedId,
      setSelectedId
      }}>
       <UtilModalContext.Provider value={{toolbarIndex, setToolbarIndex}}>
      <div id="design">
      <Left> </Left>
      { toolbarIndex > -1 && <Middle Comp={tabs[toolbarIndex].icon}></Middle>}
      <Right></Right>
    </div>  
    </UtilModalContext.Provider>
    </ContentContext.Provider>
  
  )
}
