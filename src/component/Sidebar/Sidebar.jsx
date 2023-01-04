import React, { useState } from "react"
import logo from "../../imgs/logo.png"
import './sidebar.css'
import { UilSignOutAlt, UilBars} from "@iconscout/react-unicons"
import { motion } from "framer-motion"

import {SidebarData} from "../../data/Data.js"
const Sidebar=()=>{
    const [selected, setSelected]=useState(0)
    const [expanded, setExpanded]=useState(true)
    const sidebarVariants={
        true:{
            left:"0%",
        }, //if sidebar is expanded

        false:{
            left:"-70%",
        } //if sidebar is not expanded
    }
    return(
        <> 
        {/* UilBars Responsiveness*/}
<div className="bars" style={expanded?{left:"60%"}:{left:"5%"}}
onClick={()=>setExpanded(!expanded)}>
            <UilBars/>
        </div>
{/*  sidebar Responsiveness using motion from framer-motion */}
        <motion.div className="sidebar"
        variants={sidebarVariants}
        //using window.innerWidth<=768 is just for only mobile collapse
        animate={window.innerWidth<=768?`${expanded}`:""}>
        
        
        
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
           
        </motion.div>
        </>
    )
}
export default Sidebar