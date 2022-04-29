import React from 'react'
import { Link  } from 'react-router-dom'
import  "./index.less"
import { routes } from '../../router'
export default function index() {
  return (
    <>
      <div className="header">
      {routes.map(({path}, i) => <Link to={path} key={i}>{path}</Link>)}
    </div> 
    </>
   
  )
}
