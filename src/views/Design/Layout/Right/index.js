import React, {  useContext, useState } from 'react'
import Header from './Layout/Header'
import Top from './Layout/Top'
import Middle from './Layout/Middle'
import Bottom from './Layout/Bottom'
import './index.less'
import { SliderContext } from './context'
import { ContentContext } from '../../context'

export default function Index() {
  const { pageIndex } = useContext(ContentContext)
  const [ scale, setScale] = useState(35)
  return (
    <SliderContext.Provider value={{scale, setScale}}>
  
    <div id="design-right-side" >
    <Header></Header>
    <Top></Top>
    {pageIndex> -1 && <Middle></Middle>}
    <Bottom></Bottom>
    </div>
    </SliderContext.Provider>
  )
}
