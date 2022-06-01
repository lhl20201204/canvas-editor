import React, { useContext, useEffect, useState } from 'react'
import CloseBtn from '../../components/CloseBtn'
import Menu from '../../../../../../components/Menu'
import {property} from '../../config'
import "./index.less"
import { ContentContext, UtilModalContext } from '../../../../context'
import { PlusOutlined } from '@ant-design/icons'
import { initController } from '../../../../../../render'
const { width ,height} = property;
let timeout
const interval = 1000
const minHoverTime = 1000
const map = new Map()
export default function Index(props) {
  const { selectedId, setSelectedId, canvasList, setCanvasList  } = useContext(ContentContext)
  const {toolbarIndex} = useContext(UtilModalContext)
  const [hover, setHover] = useState(-1)
  const [ hoveringAddselectedId, setHoveringAddselectedId] = useState(-1)
  const [ hoverTime, setHoverTime ] = useState(0)

  const addDom =(idn) => (e) => { 
    if (map.has(idn) || !e) {
       return
    }
    map.set(idn, {dom: e, isRender: false})
    if (map.size === canvasList.length) {
      const state = canvasList.map(v => {
        const {dom, isRender} = map.get(v.id)
        if (isRender) {
          return v
        }
        const ctx = dom.getContext('2d')
        // ctx.scale(4,4)
        // ctx.fillText(v.id, 10,10) // test
        initController( {
          ...v,
          dom,
        },{
          elements: [
            {
              type: 'Text',
              props: {
                scaleX: 2,
                scaleY: 2,
                x: 10,
                y: 10,
                content: v.id,
              }
            },
            {
              type: 'Text',
              props: {
                scaleX: 4,
                scaleY: 4,
                x: 50,
                y: 50,
                content: v.id,
              }
            }
          ]
        })
        map.set(v.id, {dom, isRender:true})
        return {
          ...v,
          dom,
          ctx
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

    if (hoveringAddselectedId > -1) {
      caculate(0)
    }else {
      setHoverTime(0)
    }

    return () => {
      timeout && clearTimeout(timeout)
    }

  }, [ hoveringAddselectedId ])




  const condition = i =>  hoveringAddselectedId === i && hoverTime >= minHoverTime
  const middleClass = (toolbarIndex > -1 ?'toolbar-open': 'toolbar-close') + (selectedId === -1 ? ' hidden': '')

  return (
    <div id="middle" className={middleClass} >
       <div className='pageContainer'> 
       {
         canvasList.map(({ id },i) =><div key={id}>
           <div 
           className={(selectedId=== id ? 'container selected': 'container') +  (condition(i) ? ' hovering' : '')}
           onMouseEnter={() => setHover(i)}  
           onMouseLeave={() => setHover(-1)}
           onClick={() =>setSelectedId(id) }>
           <canvas 
           key={id}
           style={{width: width / 22.5, height: height/22.5}}
            ref={addDom(id)}
            > </canvas>
            <Menu id="moreHandle" className={hover === i? '': 'hidden' } />
           <span> {i+1} </span>
           </ div>
           <div className={'interval' +  (condition(i)? ' hovering' : '')} 
                onMouseEnter={() => setHoveringAddselectedId(i)}
                onMouseLeave={() => setHoveringAddselectedId(-1)}
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
