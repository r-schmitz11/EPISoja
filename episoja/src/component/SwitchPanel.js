// document.getElementById("signup-box").addEventListener('clock', () => {
//     document.getElementById("panel-right").classList.add("active");
// })

import React, { useState } from "react";

function SwitchPanel() {
    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        const panel = document.getElementById("panel");
        const button_panel = document.getElementById("button-panel");
        const p = document.getElementById("p");

        setToggle(pre => !pre);
        if (!toggle) {
            panel.classList.remove("active");
            p.innerHTML = "Don't have an account ?"
            button_panel.innerHTML = "SIGN UP";
        } else {
            panel.classList.add("active");
            p.innerHTML = "have an account ?";
            button_panel.innerHTML = "SIGN IN";
        }
    }
    return (
        <div className="absolute w-1/2 h-full rounded-r-3xl grid grid-rows-subgrid place-items-center transition-all duration-700 ease-in-out" id="panel">
            <div className="grid grid-rows-2 place-items-center gap-5">
                <p className="row-start-1 text-white text-3xl" id="p">Don't have an account ?</p>
                <div className="row-start-2">
                    <button className=" bg-transparent h-14 w-40 rounded-lg border-2 border-white text-white hover:bg-[rgb(58,58,158)] text-lg" id="button-panel" onClick={handleToggle}>SIGN UP</button>
                </div>
            </div>
        </div>
        // (toggle) ? (
        //     // transition: all 0.6s ease-in-out;
        //     <div className="absolute w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-r-3xl col-start-2 grid grid-rows-2 place-items-center transition-all duration-500 ease-in-out" id="panel-right">
        //         <p className="row-start-1 text-white text-3xl">Don't have an account ?</p>
        //         <div className="row-start-2">
        //             <button className=" bg-transparent h-14 w-40 rounded-lg border-2 border-white text-white hover:bg-gradient-to-r from-blue-400 to-blue-500 text-lg" id="signup-box" onClick={handleToggle}>Sign Up</button>
        //         </div>
        //     </div>
        // ) : (
        //     <div className="absolute w-1/2 h-full bg-gradient-to-l from-blue-400 to-blue-600 rounded-l-3xl col-start-1 grid grid-rows-2 place-items-center transition-all duration-500 ease-in-out" id="panel-left">
        //         <p className="row-start-1 text-white text-3xl">Have an account ?</p>
        //         <div className="row-start-2">
        //             <button className="bg-transparent h-14 w-40 rounded-lg border-2 border-white text-white hover:bg-gradient-to-l from-blue-400 to-blue-500 text-lg" id="signin-box" onClick={handleToggle}>Sign In</button>
        //         </div>
        //     </div>
        // )
    );
}

export default SwitchPanel;