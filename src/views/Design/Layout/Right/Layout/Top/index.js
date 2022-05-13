import React, { useContext } from 'react'
import { ContentContext } from '../../../../context'

import "./index.less"
export default function Index() {
  const {pageIndex, canvasList } = useContext(ContentContext)
  return (
    <div id="top" >
      当前页面是{pageIndex} 
      总共{canvasList.length}页
      <ul>{new Array(100).fill(0).map((v,i) => <li key={i}></li>)}</ul></div>
  )
}
