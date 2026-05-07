import React from "react";
import logo from "../Images/logo.png"
import { FiDownload } from 'react-icons/fi';
import { useTheme } from "../Context/ThemeContext";


const EditorNavbar = () => {
    const { isLightMode } = useTheme();
    return (
        <>
            <div className={`EditorNavbar flex items-center justify-between px-[100px] h-[80px] ${isLightMode ? "bg-[#f4f4f4] text-black" : "bg-[#141414] text-white"}`}>
                <div className="logo">
                    <img className='w-[150px] cursor-pointer' src={logo} alt="" />
                </div>
                <p>File / <span className="text-[gray]">My First Project</span></p>
                <i className={`p-[8px] btn ${isLightMode ? "bg-gray-200" : "bg-black"} rounded-[5px] cursor-pointer text-[20px]`}><FiDownload/></i>
            </div>
        </>
    )
}

export default EditorNavbar;
