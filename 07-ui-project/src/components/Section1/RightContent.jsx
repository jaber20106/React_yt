import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  console.log(props);
  
  return (
    <div className='h-full overflow-x-auto flex-nowrap p-6 w-2/3 flex gap-10'>
        {props.users.map(function(elem){
          return <RightCard img = {elem.img} intro = {elem.intro} tag = {elem.tag} />
        })}          

    </div>
  )
}

export default RightContent
