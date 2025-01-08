import React, { useState } from "react";
import logo from "../Images/logo.png"
import { Link } from "react-router-dom";
import Image from "../Images/authPageSide.png"

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="container  w-screen min-h-screen flex items-center justify-between pl-[100px]">
                <div className="left w-[30%]">
                    <img className='w-[200px]' src={logo} alt=""/>
                    <form onSubmit={submitForm} className='w-full mt-[60px]' action="">

                        <div className="inputBox">
                            <input required onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder="email"/>
                        </div>

                        <div className="inputBox">
                            <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} type="text" placeholder="Password "/>
                        </div>

                        <p className='text-[gray]'>Don't have an account? <Link to="/SignUp" className='text-[#00AEEF]'>SignUp</Link></p>

                        <button className="btnBlue w-full mt-[20px]">Login</button>
                    </form>
                </div>
                <div className="right w-[55%]">
                    <img className="h-[100vh] w-[100%] object-cover" src={Image} alt="" />
                </div>
            </div>
        </>
    )
}

export default Login