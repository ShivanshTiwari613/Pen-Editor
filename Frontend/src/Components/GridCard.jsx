import React, { useState } from 'react';
import codeImg from '../Images/code.png';
import deleteImg from '../Images/delete.png';

const GridCard = () => {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

  return (
    <>
      <div className='gridcard bg-[#141414] w-[270px] p-[10px] h-[180px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50'>
        <img className="w-[90px]" src={codeImg} alt="" />
        <h3 className="text-[20px] w-[90%] line-clamp-1">My First project</h3>
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[gray]">created on 20th December 2024</p>
          <img onClick={() => { setIsDeleteModelShow(true) }} src={deleteImg} alt="" className="w-[30px] cursor-pointer" />
        </div>
      </div>
      {
        isDeleteModelShow ? <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
          <div className="mainModel w-[25vw] h-[25vh] bg-[#141414] rounded-lg p-[10px]">
            <h3 className='text-3xl'>Do you want to Delete this Project</h3>
            <div className="flex w-full mt-5 items-center gap-[10px]">
              <button className="p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]">Delete</button>
              <button onClick={() => { setIsDeleteModelShow(false) }} className="p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]">Cancel</button>
            </div>
          </div>
        </div> : null
      }
    </>
  );
};

export default GridCard;