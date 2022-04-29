import React, {  useState } from 'react'
import Header from './Layout/Header'
import Top from './Layout/Top'
import Middle from './Layout/Middle'
import Bottom from './Layout/Bottom'
import './index.less'
import { PageIndexContext, PageSizeContext, SliderContext } from './context'

export default function Index() {
  const [ pageIndex, setPageIndex ] = useState(0)
  const [ scale, setScale] = useState(35)
  const [ pageSize, setPageSize ] = useState(40)
  return (
    <PageSizeContext.Provider value={{pageSize, setPageSize}}>
    <SliderContext.Provider value={{scale, setScale}}>
    <PageIndexContext.Provider value={{pageIndex, setPageIndex}}>
    <div id="design-right-side" >
    <Header></Header>
    <Top></Top>
    {pageIndex> -1 && <Middle></Middle>}
    <Bottom></Bottom>
    </div>
    </PageIndexContext.Provider>
    </SliderContext.Provider>
    </PageSizeContext.Provider>
  )
}
