const BodyHeaderLayout = ({title, children}) => {

    return (
  
      <div className="flex sm:flex-col sm:gap-3 justify-between items-center sm:items-start mt-[10px] mb-[15px]">
  
        <p className="text-[16px] font-semibold">{title}</p>
  
        {children}        
    </div>
    )
  }

export default BodyHeaderLayout  