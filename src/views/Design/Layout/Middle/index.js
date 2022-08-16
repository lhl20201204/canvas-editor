import React, { useContext } from "react";
import './index.less'
import { ContentContext, UtilModalContext } from '../../context'
import ConfigTree from "../../ConfigTree";
const CloseBtn = () =>{ 
    const { toolbarIndex, setToolbarIndex } = useContext(UtilModalContext)
    return (
  <div className="close" onClick={()=>setToolbarIndex(-1)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
        d="M7 3.17 4.88 5.3a1 1 0 0 0 0 1.42L7 8.83"
      ></path>
    </svg>
  </div>
)
    };
  
export default function Index(props) {
  const { Comp } = props;
  const {  canvasList, selectedId, } = useContext(ContentContext)
  const AddText = () => {
     const vm = ConfigTree.findTarget(canvasList, selectedId)
     console.log(vm)
     const { currentConfig={} } = vm
     vm.setConfig({
      ...(currentConfig || {}),
      elements: [
        ...(currentConfig?.elements || []),
        {
          type: 'Text',
          props: {
            scaleX: 3,
            scaleY: 3,
            x: 60,
            y: 10,
            content: 'test',
          },
          to: {
            scaleX: 5,
            scaleY: 5,
            x: 90
          }
        },
      ]
     })
  }
  return (
    <div className="popup">
      <button onClick={AddText}> 点击画图</button>
      {Comp && <Comp />}
      <CloseBtn />
    </div>
  );
}
