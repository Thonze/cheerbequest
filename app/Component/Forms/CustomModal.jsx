import React from 'react';
import Box from '@mui/material/Box';
import { BsX } from 'react-icons/bs';
import AnimModal from './AnimModal';

const CustomModal = ({ children, open = false, handleClose, modalClassName='', parentContainer = "", mainClass='' }) => {
  return (
    <div>
      <AnimModal open={open} handleClose={handleClose} className={mainClass}>
        <div className={`flex items-center w-full h-full mt-[90px] sm:mt-0 justify-center ${parentContainer}`}>
            
          <Box className={`bg-slate w-1/2 py-4 px-4 min-h-[160px]  sm:mt-5 sm:w-[90vw] sm:px-2 relative ${modalClassName} bg-white rounded`}>
            {/* <span className=''>Add Supporting documents</span> */}
            <div onClick={handleClose} className="absolute cursor-pointer rounded-full p-2 right-3 top-0 bg-slate-50 mt-[10px] flex justify-center items-center">
              <BsX size={20} />
            </div>
          {children}
          </Box>
        </div>

      </AnimModal>
    </div>
  );
};

export default CustomModal;
