
import MyCanvas from "../MyCanvas";
import Rectangle from "../MyCanvas/Shape/Rectangle";
import Ellipse from "../MyCanvas/Shape/Ellipse";
import Controller from "../MyCanvas/Controller"
import Dynamic from "../MyCanvas/Dynamic";
import Text from "../MyCanvas/Shape/Text";
import Texture from "../MyCanvas/Shape/Texture";
import Group from "../MyCanvas/Shape/Group";
import Lines from "../MyCanvas/Shape/Lines";
const SHAPES = {
  Rectangle,
  Ellipse,
  Text,
  Texture,
  Group,
  Lines
}
const map = new Map()
export function initController ({dom, id}, config, noUseOriginWH ) {
  let ret = null
  const controller = new Controller({
    el: dom, 
    useOriginWH: !noUseOriginWH,
    outerContainerClassName: 'copyCanvas',
    getCopyContainer(newCanvas) {
      ret = newCanvas
    }
   })
  let engine = new MyCanvas({
      controller,
      auto: true,
  })
  const { elements } = config

  engine = elements.reduce((a, { type, props} ) => a.add(new SHAPES[type](props)), engine)

  map.set(id, { 
    engines: [engine],
    controller,
    config
  })
  return ret
}