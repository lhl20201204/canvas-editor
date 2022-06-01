import React, { useContext, useEffect, useState } from 'react'
import { initController } from '../../../../../../render'
import { ContentContext } from '../../../../context'
import { property } from '../../config'
import { SliderContext } from '../../context'
import "./index.less"
let container = null
let copyContainer = null
let lastSelectedId = null
const { width ,height} = property
export default function Index() {
  const {selectedId, canvasList } = useContext(ContentContext)
  const {scale} = useContext(SliderContext)
  const [el, setEl] = useState(null)
 
  const addDom =(id) => {
    return (dom) => { 
      if (dom === container) {
        return
      }
      container = dom
    copyContainer = initController( {
      id,
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
            content: id,
          }
        },
        {
          type: 'Text',
          props: {
            scaleX: 4,
            scaleY: 4,
            x: 50,
            y: 50,
            content: id,
          }
        }
      ]
    }) 
  }
}

  useEffect(() => {
    if (el) {
      addDom(selectedId)(el)
    }
    if (selectedId && selectedId !== lastSelectedId) {
      if(copyContainer) {
        copyContainer.parentNode.removeChild(copyContainer)
      }
      lastSelectedId = selectedId
    }
  }, [el, selectedId])

  useEffect(() => {
      if (copyContainer) {
        copyContainer.style.width = (width * scale/100) +'px'
        copyContainer.style.height = (height * scale/100) +'px'
      }
  }, [scale])

  return (
    <div id="top" >
      {selectedId > 0 && <div className="singleCanvas"><canvas key={selectedId} ref={el => setEl(el)}  style={{width: width * scale/100, height: height*scale/100}}>
      </canvas></div> }
    </div>
  )
}
