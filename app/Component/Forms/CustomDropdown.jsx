import React,{useRef} from 'react';
import {ClickAwayListener} from '@mui/base/ClickAwayListener';
import Proptypes from 'prop-types';
import {AiOutlineCaretDown} from 'react-icons/ai'
import trimText from '../../Utils/trimText';
import { Popper } from '@mui/material';
import CustomModal from './CustomModal';


const CustomDropdown = ({
  data,
  value = {label: 'Select', value: 'Select'},
  onChangeOption = () =>{},
  showIcon = true,
  className = '',
  optionClass = '',
  dropdownTitleClass = '',
  mainContainerStyle ='',
  trimtext= false,
  withLabel =true,
  label='',
  labelClass ='',
  smallLabelClassName ='',
  trimLength = 10,
  
}) => {

  const parentContainerRef = useRef(null);
  const [openDropdown, setDropdown] = React.useState(false);

  const id = openDropdown ? 'simple-popper' : undefined;

  const handleOpenDropDown = (e) => {
    setDropdown(openDropdown ? null : e.currentTarget);
  };

  const handleSelectedOption = (val) => {
    onChangeOption(val);
    setDropdown(false);
  };

  const handleCloseDropdown = () => {
    setDropdown(null);
  };

  const parentWidth = parentContainerRef.current
  ? parentContainerRef.current.clientWidth
  : 0;
  return (
    <ClickAwayListener onClickAway={handleCloseDropdown}>
      <div className={`${mainContainerStyle}`} ref={parentContainerRef}>

        { withLabel && <label className={`${labelClass}`}>{label}</label>}

        <div
          onClick={handleOpenDropDown}
          className={` !border-1 !border-main flex justify-between cursor-pointer items-center py-[8px] px-[10px] ${className}`}
        >
          <p className={`text-grey-600 cursor-pointer text-[14px] w-[80%] ${dropdownTitleClass}`}>{trimtext === true ? trimText(value?.label, trimLength,trimLength) :  value?.label}</p>
          <AiOutlineCaretDown className='text-[12px] text-gray-500'/>
        </div>

        <Popper
          className={`shadow-select sm:hidden bg-white mt-1 ${optionClass}`}
          id={id} 
          open={Boolean(openDropdown)} 
          anchorEl={openDropdown} 
          onClose={handleCloseDropdown} 
          placement={'bottom'}
          style={{ width: parentWidth + 'px' }}
          >
            {data.map((item) => (
              <div
                onClick={() => handleSelectedOption(item)}
                className={`px-[14px] py-[5px] hover:bg-5A5 hover:text-white flex items-center justify-between`}
              >
                <p className={`text-[14px] cursor-pointer ${labelClass}`}>{item.label} {item.smallLabel !== undefined &&<span className={`text-[9px] ${smallLabelClassName}`}>{item?.smallLabel}</span>} </p>
                {/* {showIcon && <CheckIcon />} */}
              </div>
            ))}
        </Popper>

        <CustomModal 
          mainClass='hidden sm:inline-block' 
          open={Boolean(openDropdown)} 
          handleClose={handleOpenDropDown}
          // parentContainer='mt-0'
          // modalClassName='h-[87vh] mt-5 w-[90vw] !px-2'
        >
          <div className='mt-8'>
          {data.map((item) => (
              <div
                onClick={() => handleSelectedOption(item)}
                className={`px-2 py-3 border-b-1 hover:bg-5A5 hover:text-white flex items-center justify-between`}
              >
                <p className={`text-[20px]`}>{item.label} {item.smallLabel !== undefined &&<span className={`text-[9px] ${smallLabelClassName}`}>{item?.smallLabel}</span>} </p>
                {/* {showIcon && <CheckIcon />} */}
              </div>
            ))}
          </div>
        </CustomModal>

      </div>
    </ClickAwayListener>
  );
};

export default CustomDropdown;

CustomDropdown.proptype = {
  data: Proptypes.arrayOf({
    value: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
  }).isRequired,
  value: Proptypes.string.isRequired,
  onChangeOption: Proptypes.func.isRequired,
};
