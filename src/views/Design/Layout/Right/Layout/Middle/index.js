import React, { useContext, useEffect, useState } from 'react'
import CloseBtn from '../../components/CloseBtn'
import Menu from '../../../../../../components/Menu'
import {property} from '../../config'
import "./index.less"
import { ContentContext, UtilModalContext } from '../../../../context'
import { PlusOutlined } from '@ant-design/icons'
const { width ,height} = property
let timeout
const interval = 1000
const minHoverTime = 1000
const map = new Map()
export default function Index(props) {
  const { pageIndex, setPageIndex, canvasList, setCanvasList  } = useContext(ContentContext)
  const {cur} = useContext(UtilModalContext)
  const [hover, setHover] = useState(-1)
  const [ hoveringAddPageIndex, setHoveringAddPageIndex] = useState(-1)
  const [ hoverTime, setHoverTime ] = useState(0)

  const addDom =(idn) => (e) => { 
    if (map.has(idn) || !e) {
       return
    }
    map.set(idn, e)
    if (map.size === canvasList.length) {
      const state = canvasList.map(v => {
        const dom = map.get(v.id)
        const ctx = dom.getContext('2d')
        ctx.scale(4,4)
        ctx.fillText(v.id, 10,10) // test
        return {
          ...v,
          dom,
          ctx,
        }
      } )
    setCanvasList(state) 
    }
    
  }

  const addCanvas = (i) => () => {
    const state = [...canvasList.slice(0, i+1), { id: Math.floor(Math.random() * 100000000)}, ...canvasList.slice(i+1)]
    setCanvasList(state)
  }

  useEffect(() => {
    function caculate (x) {
      setHoverTime(x)
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(()=> {
        if(x < minHoverTime) {
          caculate(x+interval)
        }
      }, interval)
    }

    if (hoveringAddPageIndex > -1) {
      caculate(0)
    }else {
      setHoverTime(0)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }

  }, [ hoveringAddPageIndex ])


  const condition = i =>  hoveringAddPageIndex === i && hoverTime >= minHoverTime

  return (
    <div id="middle" className={cur > -1 ?'tab-open': 'tab-close'} >
       <div className='pageContainer'> 
       {
         canvasList.map(({ id },i) =><div key={id}>
           <div 
           className={(pageIndex=== i ? 'container selected': 'container') +  (condition(i) ? ' hovering' : '')}
           onMouseEnter={() => setHover(i)}  
           onMouseLeave={() => setHover(-1)}
           onClick={() =>setPageIndex(i) }>
           <canvas 
           key={id}
           style={{width: width / 22.5, height: height/22.5}}
            ref={addDom(id)}
            > </canvas>
            <Menu id="moreHandle" className={hover === i? '': 'hidden' } />
           <span> {i+1} </span>
           </ div>
           <div className={'interval' +  (condition(i)? ' hovering' : '')} 
                onMouseEnter={() => setHoveringAddPageIndex(i)}
                onMouseLeave={() => setHoveringAddPageIndex(-1)}
                 > 
                 {condition(i) && <span onClick={addCanvas(i)}><PlusOutlined /></span>  }
            </div>
         </ div>)
       } 
       </div>
       <CloseBtn></CloseBtn>
    </div>
  )
}
