import React, { useContext } from 'react'
import { PageIndexContext, PageSizeContext } from '../../context'
import "./index.less"
export default function Index() {
  const {pageIndex} = useContext(PageIndexContext)
  const {pageSize} = useContext(PageSizeContext)
  return (
    <div id="top" >
      当前页面是{pageIndex} 
      总共{pageSize}页
      <ul>{new Array(100).fill(0).map((v,i) => <li key={i}></li>)}</ul></div>
  )
}
