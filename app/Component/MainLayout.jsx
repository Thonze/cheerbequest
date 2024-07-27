import Nav from "./Nav/Nav"
import Header from "./Header/Header"
import { useSelector } from "react-redux"
import Announcement from "./Announcement"
import Footer from "./Footer"
import Toggle from "./Header/Toggle"

const MainLayout = ({children}) => {

    const toggleNav = useSelector(state => state.appSlice)?.toggleNav

    return (
        <div className="flex flex-col h-[100vh]">

             
            <Header/>

            <div className="flex flex-grow">

                <Nav />

                <div className={` sm:bg-[#F5F5F5] pr-[20px] flex flex-col gap-3 ${toggleNav ? 'pl-[265px]' : 'pl-[80px]'}  sm:px-3 sm:py-1 pb-5 pt-[80px] sm:pt-[60px] bg-main-bg w-full`}>
                    {/* <Announcement /> */}
                 
                    {children}
                </div>
            </div>

        <Footer/>
        </div>
    )
}

export default MainLayout