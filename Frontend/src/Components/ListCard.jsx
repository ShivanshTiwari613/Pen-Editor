import React, { useState } from 'react';
import codeImg from '../Images/code.png';
import deleteImg from '../Images/delete.png';

const ListCard = () => {
    const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);
    return (
        <>
            <div className='listcard mb-2 w-full flex items-center justify-between bg-[#141414] p-[10px] cursor-pointer hover:bg-[#202020] rounded-lg shadow-lg shadow-black/50'>
                <div className="flex items-center gap-2">
                    <img src={codeImg} alt="" className="w-[80px]" />
                    <div>
                        <h3 className="text-[20px]">My First Project</h3>
                        <p className="text-[gray] text-[14px]">created on 20th December 2024</p>
                    </div>
                </div>
                <div>
                    <img onClick={() => { setIsDeleteModelShow(true) }} src={deleteImg} alt="" className="w-[30px] cursor-pointer mr-4" />
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

export default ListCard;