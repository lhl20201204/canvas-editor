import React, { useContext } from 'react'
import {tabs} from '../../config';
import { UtilModalContext } from '../../context';
import './index.less'
const tab = tabs.slice(0,6)
export default function Index() {
  const {cur, setCur } = useContext(UtilModalContext)
  return (
    <div>
     {tab.map(({name, icon: Icon, id}) =>
      <div key={name} className={"tab"+(cur===id?" tabSelected": "")} onClick={() =>setCur(id) }> 
      <Icon /> 
      <span>
        {name}
      </span>
     </div> )}
     {cur}
    </div>
  
  )
}
