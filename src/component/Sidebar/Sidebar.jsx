import React, { useState } from "react"
import logo from "../../imgs/logo.png"
import './sidebar.css'
import { UilSignOutAlt} from "@iconscout/react-unicons"

import {SidebarData} from "../../data/Data.js"
const Sidebar=()=>{
    const [selected, setSelected]=useState(0)
    return(
        <div className="sidebar">
            {/* logo*/}
            <div className="logo">
            <img src={logo} alt="logo"/>
            <span>
                Sh<span>o</span>ps
            </span>

            </div>
            {/* menu */}
            
                
                    <div className="menu">
                    {SidebarData.map((item, index)=>{
                        return(
<div className={selected===index?"menuItem active":"menuItem"} 
key={index}
onClick={()=>setSelected(index)}>
<item.icon/>
<span>{item.heading}</span>
</div>

            
                )
            })}
            <div className="menuItem">
<UilSignOutAlt/>
            </div>
            </div>
           
        </div>
    )
}
export default Sidebar