import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { initController } from '../../../../../../render'
import ConfigTree from '../../../../ConfigTree'
import { ContentContext } from '../../../../context'
import { property } from '../../config'
import { SliderContext } from '../../context'
import "./index.less"
const { width ,height} = property
export default function Index() {
  const {selectedId, canvasList } = useContext(ContentContext)
  const {scale} = useContext(SliderContext)
  const lastSelectedId = useRef(selectedId)
 
 const bindEl = (selectedId) => (e) => {
  if (e) {
    const vm = ConfigTree.findTarget(canvasList, selectedId)
    if (vm && vm.oldCopyContainer && vm.oldCopyContainer.parentNode) {
      vm.oldCopyContainer.parentNode.removeChild(vm.oldCopyContainer)
    }
    vm.setEl(e)
  }
 }

  useEffect(() => {
    if (lastSelectedId.current !== selectedId) {
      if (lastSelectedId.current > 0) {
          const vm  = ConfigTree.findTarget(canvasList, lastSelectedId.current)
          if (vm && vm.oldCopyContainer && vm.oldCopyContainer.parentNode) {
            vm.oldCopyContainer.parentNode.removeChild(vm.oldCopyContainer)
          }
      }
      lastSelectedId.current = selectedId
    }
  }, [selectedId])

  return (
    <div id="top" >
      {(selectedId > 0) && <div className="singleCanvas" style={{width: width * scale/100, height: height*scale/100}}><canvas key={selectedId} ref={bindEl(selectedId)} style={{width: '100%', height: '100%'}} >
      </canvas></div> }
    </div>
  )
}
