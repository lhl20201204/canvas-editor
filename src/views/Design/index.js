import React, {  useEffect, useState } from 'react'
import Left from './Layout/Left'
import Middle from './Layout/Middle'
import Right from './Layout/Right'
import { UtilModalContext, ContentContext } from './context'
import { tabs } from './config'
import './index.less'
import ConfigTree from './ConfigTree'
export default function Index() {
  const [toolbarIndex, setToolbarIndex ] = useState(0)
  const [ canvasList, setCanvasList ] = useState(new Array(40).fill(0).map(v => new ConfigTree({
    id: Math.floor(Math.random() * 100000000)
  })))
  const [ selectedId, setSelectedId ] = useState(canvasList.length ? canvasList[0].id :0)
  
  useEffect(() => {
    for(const c of canvasList) {
      c.setConfig({
      elements: [
           {
              type: 'Text',
              props: {
                scaleX: 2,
                scaleY: 2,
                x: 10,
                y: 10,
                content: c.id,
              }
            },
            {
              type: 'Text',
              props: {
                scaleX: 4,
                scaleY: 4,
                x: 50,
                y: 50,
                content: c.id,
              }
            }
          ]
      })
    }
  }, [])

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
