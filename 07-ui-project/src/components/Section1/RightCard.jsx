import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-70 overflow-hidden relative rounded-4xl'>
      <img className = 'h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute p-10 top-0 left-0 h-full w-full flex flex-col justify-between'>
        <h2 className = 'bg-white rounded-full h-10 w-10 flex justify-center items-center text-xxl  font-semibold'>1</h2>
        <RightCardContent tag = {props.tag} intro = {props.intro} />
       
      </div>
    </div>
  )
}

export default RightCard
