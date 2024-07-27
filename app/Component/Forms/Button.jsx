const Button = ({
    title='', 
    className='', 
    Icon,
    withIcon=false, 
    handleSubmit=()=>{}}) => {
    return (
        <button  
            onClick={handleSubmit}
            className={`bg-primary flex gap-2 items-center justify-center text-white hover:bg-opacity-[0.7] px-2 py-1 rounded-sm ${className}`}>
            {withIcon && <Icon size={24}/>}
            <div>
                {title}
            </div>
        </button>
    )
}

export default Button