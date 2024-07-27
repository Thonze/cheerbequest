
const DashboardCount = ({bgColor='', title='', count}) => {
  return (
    <div className={`${bgColor} h-[97px]  flex md:flex-1 hover:shadow-lg shadow-md`}>
        <div className="h-[95px] bg-white flex flex-col flex-1 p-3">
            <div>
                <span className="sm:text-[12px]">{title} </span>
            </div>
            <div className="mt-[14px] font-bold">
                <span>{count} </span>
            </div>
        </div>
    </div>
  )
}

export default DashboardCount