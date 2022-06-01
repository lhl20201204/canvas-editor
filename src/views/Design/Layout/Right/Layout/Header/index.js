import React, { useContext } from 'react'
import { tabs } from '../../../../config'
import {UtilModalContext} from '../../../../context'
import "./index.less"
const color = tabs[6]
const effect = tabs[7]
const time = tabs[9]
export default function Index() {
  const { setToolbarIndex } = useContext(UtilModalContext)
  return (
    <div id="header">
      <div className='fun'> 
        {[color, effect].map(({id,name,icon:Icon}, i) =><div key={id}>
           <span className='btn-wrapper '  onClick={()=> setToolbarIndex(id)}> <Icon> </Icon> {name &&<span>{name}</span>} </span> 
           <div className='divide-line' ></div>
        </ div>)}
         <span className='btn-wrapper '> <time.icon> </time.icon> <span>{time.name}</span> </span>
      </div>
    </div>
  )
}
