import { useState } from "react"

const Toggle = ({handleChange=()=>{}, text=['Academics', 'Admission'], showText=true, className=''}) => {
    const [toggle, setToggle] = useState(0)

    const handleToggle = (val) => {
        setToggle(val)
        handleChange()
    }
  return (

    <div className={`flex ${showText && 'items-center'} gap-3 sm:gap-1`}>

        {(showText && toggle === 0) ?
         <p className="text-[14px] sm:text-[11px] w-20 sm:w-16">{text[toggle]}</p>:
         <p className={`${showText && 'w-20 sm:w-16'} `}></p>
        }
        <div className={`w-[47px] sm:w-[38px] bg-primary rounded-full h-[25px] sm:h-[20px] flex p-[2px] ${className}`}>

            <div 
                onClick={()=> handleToggle(0)}
                className={`h-full w-[50%] ${toggle === 0 && 'bg-white'} rounded-full cursor-pointer`}
            />

            <div 
               

                onClick={()=> handleToggle(1)}
                className={`h-full w-[50%] ${toggle === 1 && 'bg-white'} rounded-full cursor-pointer`}
            />


        </div>
        {(showText && toggle === 1) ? 
           <p className="text-[14px] sm:text-[11px] w-20 sm:w-16">{text[toggle]}</p>:
           <p className={`${showText && 'w-20 sm:w-16'} `}></p>
        }
    </div>
  )
}

export default Toggle