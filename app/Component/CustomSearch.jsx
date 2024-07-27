
const CustomSearch = ({ data, onSearch, placeholderText='', label='', className=''}) => {
  

  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholderText}
        // value={searchQuery}
        // onChange={handleInputChange}
        className={ ` ${className} p-2  border-1 border-primary  mb-2 outline-none rounded`}
      />
    </div>
  );
}

export default CustomSearch;
