import React, { useContext } from 'react'
import CloseBtn from '../../components/CloseBtn'
import { PageIndexContext, PageSizeContext } from '../../context'
import {property} from '../../config'
import "./index.less"
import { TabContext } from '../../../../context'
const { width ,height} = property
export default function Index(props) {
  const { pageSize } = useContext(PageSizeContext)
  const {pageIndex, setPageIndex } =useContext(PageIndexContext)
  const {cur} = useContext(TabContext)
  return (
    <div id="middle" className={cur > -1 ?'tab-open': 'tab-close'} >
       <div className='pageContainer'> 
       {
         new Array(pageSize).fill(0).map((v,i) =><div key={i} className={pageIndex=== i ? 'selected': ''} onClick={() =>setPageIndex(i) }>
           <canvas  style={{width: width / 22.5, height: height/22.5}} > </canvas>
           <span> {i+1} </span>
           </ div>)
       }
       </div>
       <CloseBtn></CloseBtn>
    </div>
  )
}
