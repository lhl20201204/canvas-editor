import MyCanvas from "../../MyCanvas";
import Rectangle from "../../MyCanvas/Shape/Rectangle";
import Ellipse from "../../MyCanvas/Shape/Ellipse";
import Controller from "../../MyCanvas/Controller"
import Dynamic from "../../MyCanvas/Dynamic";
import Text from "../../MyCanvas/Shape/Text";
import Texture from "../../MyCanvas/Shape/Texture";
import Group from "../../MyCanvas/Shape/Group";
import Lines from "../../MyCanvas/Shape/Lines";
const SHAPES = {
  Rectangle,
  Ellipse,
  Text,
  Texture,
  Group,
  Lines
}
export default class ConfigTree {
    constructor({id, configList}) {
        if (!id) {
           throw new Error('不能没有id')
        }
        this.id = id
        this.el = null
        this.smallEl = null
        this.configList = configList && configList.length ? configList: []
        this.smallController = null
        this.controller = null
        this.oldCopyContainer = null
        this.engines = null
        this.smallEngines = null
        this.currentConfig = null
    }
}

ConfigTree.prototype.render =  function(options={} ){
    const {zIndex = -1} = options
    setTimeout(() => {
    const config =  this.configList[this.configList.length + zIndex]
      if (!config) {
       return 
      }
      if (this.engines) {
        const engine = this.engines
        const { elements } = config 
        elements.reduce((a, { type, props, to} ) =>{ 
            const shape = new SHAPES[type](props)
           return to ? a.move({
            target: shape,
            ...to
           }) : a.add(shape)
        }, engine)
      }
    
      if (this.smallEngines) {
        const engine = this.smallEngines
        const { elements } = config
        elements.reduce((a, { type, props} ) => a.add(new SHAPES[type](props)), engine)
      }
    })
    
}

ConfigTree.prototype.setEl = function(el) {
    this.el = el
    this.controller = new Controller({el, useOriginWH: true, getCopyContainer: (el) => {
      this.oldCopyContainer = el
    }})
    this.engines = new MyCanvas({
        controller: this.controller,
        auto: true
    })
    this.render()
}

ConfigTree.prototype.setSmallEl = function(el) {
    this.smallEl = el
    this.smallController = new Controller({el, useOriginWH: true})
    this.smallEngines = new MyCanvas({
        controller: this.smallController,
        auto: true
    })
}

ConfigTree.prototype.setConfig = function(x) {
    this.configList.push(x)
    this.currentConfig = x
    this.render()
}

ConfigTree.findTarget = function(list, id) {
    for(const t of list) {
        if (t.id === id) {
            return t
        }
    }
    throw new Error('no found')
}