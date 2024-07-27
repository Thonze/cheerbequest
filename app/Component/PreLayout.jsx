// import Logo from "./Logo"

const PreLayout = ({title, children, className}) => {

    return(
        <div className="h-screen bg-main-bg sm:bg-white pt-32 sm:pt-10">

        <div className={`w-[50vw] sm:w-[100vw] m-auto flex flex-col items-center ${className}`}>
            <div className=''>
                <Logo />
                <p className='text-[14px] font-bold text-primary text-center'>{title}</p>

            </div>

            {children}
           
        </div>

    </div>
    )
}

export default PreLayout