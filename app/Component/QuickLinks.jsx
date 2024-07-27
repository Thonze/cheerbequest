import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = ({icon, title='', link=''}) => {
  return (
    <Link to={link} className="flex border-1 border-l-green p-4 flex-1 text-primary justify-center">
    <div className='text-[33px] mr-[5px] sm:text-[22px]'>
       { icon}
    </div>
    <div className='pt-[5px]'>
        {title}
    </div>
</Link>
  )
}

export default QuickLinks