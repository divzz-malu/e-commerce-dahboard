import React from 'react';
import classes from './RightDrawer.module.css'

const RightDrawer = () => {
  return (
     <div className={`${classes['drawer']} fixed z-[100] flex h-full w-[280px] flex-col overflow-x-hidden border-l`}>RightDrawer</div>
  )
}

export default RightDrawer