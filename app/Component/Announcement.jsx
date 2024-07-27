import React from 'react'
import {AiOutlineNotification} from 'react-icons/ai'
import { useLocation } from 'react-router-dom';

const Announcement = () => {
  const{pathname} = useLocation()
 
  return (
    pathname !== '/settings/session' && (
    <div>
        <div className="flex bg-[#AED3FF] items-center p-3 w-[100%] sm:gap-3">
            <AiOutlineNotification className="text-[33px] w-[5%] sm:w-[20%] "/>
            <p className="text-[12px] ">The ebridge team has successfully reduced the annual subscriptions for all schools strarting from 3rd December 2023. Thank you for trusting ebrdge.....
             </p>
        </div>
    </div>
  )
  )
}

export default Announcement