import Logo from "../Logo"
import Toggle from "./Toggle"
import {CgMenuLeft} from 'react-icons/cg'
import {IoIosNotificationsOutline} from 'react-icons/io'
import { useDispatch } from "react-redux"
import { setToggleMobileNav } from "../../Store/AppSlice"
import { MdLightMode } from "react-icons/md"
import { IoCalendar, IoCalendarClearOutline } from "react-icons/io5"
import PopOverAction from "../../Screens/AdmissionScreen/Applications/Components/PopOverActions"

const Header = () => {
    const dispatch = useDispatch()

    return (
        <div className="h-16 sm:h-12 fixed z-20 bg-white w-full shadow-select flex justify-between items-center px-3">

            <Logo className="sm:hidden"/>

            <CgMenuLeft 
                onClick={()=> {
                    dispatch(setToggleMobileNav(true))
                }}
                size={25} 
                className="lg:hidden"
            />

            <Toggle/>
            <div className="flex gap-2 sm:hidden">
                <IoCalendarClearOutline size={12}/><span className="font-light text-[12px]">First term / 2023-2024</span>
            </div>
            <div className="flex justify-between">
            <div className="h-10 sm:h-[33px] sm:w-[33px] w-10 sm:text-[14px] cursor-pointer bg-gray-300 rounded-full flex items-center justify-center mr-[4px]">
            <MdLightMode size={23}/>
            </div>
            {/* <div className="h-10 sm:h-[33px] sm:w-[33px] w-10 sm:text-[14px] cursor-pointer bg-gray-300 rounded-full flex items-center justify-center">
            <IoIosNotificationsOutline size={23}/>
            </div> */}
            <div className="h-10 sm:h-[33px] sm:w-[33px] w-10 sm:text-[14px] cursor-pointer bg-gray-300 rounded-full flex items-center justify-center">
             <PopOverAction heading='A'/>
            </div>
            </div>   
           
        </div>
    )
}

export default Header