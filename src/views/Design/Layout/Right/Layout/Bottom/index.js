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
  const {pageIndex, canvasList} = useContext(ContentContext)
  const {scale, setScale} = useContext(SliderContext)
  const {setCur} = useContext(UtilModalContext)
  const changeScale = (v) => {
    console.log(v)
    setScale(v)
  }
  return (
    <div id="bottom">
        <div>
        {[remark].map(({id,name,icon:Icon}) =><div key={id}>
           <span  onClick={()=> setCur(id)}> <Icon> </Icon> {name &&<span>{name}</span>} </span> 
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
      {pageIndex===-1&&<CloseBtn></CloseBtn>}
    </div>
  )
}
