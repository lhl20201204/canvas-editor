
import createGenInstanceFn from "../createGenInstanceFn"
const logger = false
export default function log(ret) {
  return function (next) {
    return function f() {
      if (logger) {
        console.log('代理' + f.fnName + '函数')
      }
      return createGenInstanceFn(ret, f.fnName, next)(...arguments) // 方便获取参数
    }
  }
}