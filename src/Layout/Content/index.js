import React from 'react'
import {  Route, Routes } from 'react-router-dom' 
import { routes } from '../../router'
import './index.less'
const getRoute = (routes, p='') => {
  return routes.map(({path, component: Component, children}) => {
    return <Route exact path={p + path} element={<><Component /></>} key={p + path}>
      </Route>
 } )
}

export default function index() {
  return (
    <div id="content">
       <Routes>
         {getRoute(routes)}
      </Routes>
    </ div>
  )
}
