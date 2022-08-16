import React, {  useState } from 'react'
import Header from './Layout/Header'
import Top from './Layout/Top'
import Middle from './Layout/Middle'
import Bottom from './Layout/Bottom'
import './index.less'
import { SliderContext } from './context'

export default function Index() {
  const [ scale, setScale] = useState(35)
  return (
    <SliderContext.Provider value={{scale, setScale}}>
    <div id="design-right-side" >
    <Header></Header>
    <Top></Top>
    <Middle ></Middle>
    <Bottom></Bottom>
    </div>
    </SliderContext.Provider>
  )
}
