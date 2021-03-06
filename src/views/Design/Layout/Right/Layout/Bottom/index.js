import React, { useContext } from 'react'
import CloseBtn from '../../components/CloseBtn'
import { SliderContext } from '../../context'
import { tabs } from '../../../../config'
import "./index.less"
import { ContentContext, UtilModalContext } from '../../../../context'
import { Slider, Row, Col } from 'antd'
const remark = tabs[8]
const fullScreen = tabs[10]
export default function Index() {
  const {selectedId, canvasList} = useContext(ContentContext)
  const {scale, setScale} = useContext(SliderContext)
  const {setToolbarIndex} = useContext(UtilModalContext)
  const changeScale = (v) => {
    setScale(v)
  }
  return (
    <div id="bottom">
        <div>
        {[remark].map(({id,name,icon:Icon}) =><div key={id}>
           <span  onClick={()=> setToolbarIndex(id)}> <Icon> </Icon> {name &&<span>{name}</span>} </span> 
        </ div>)}
      </div>
      <div className='slider-wrapper'>
       <span className='scale'> {scale}%</span>
      <Row>
        <Col span={24}>
        <Slider 
           tooltipVisible={false}
            onChange={changeScale}
             min={10}
            value={scale}
            max={200} ></Slider>
        </Col>
       </Row>
        <span className='pageSize'> {canvasList.length}</span> 
        <span> <fullScreen.icon> </fullScreen.icon></span>
        </div> 
      {selectedId < 0 &&<CloseBtn></CloseBtn>}
    </div>
  )
}
