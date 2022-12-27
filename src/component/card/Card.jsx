import { useState } from "react";
import {AnimateSharedLayout} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./card.css"
import {UilTimes} from "@iconscout/react-unicons"

const Card=(props)=>{
    const [expanded, setExpanded]=useState(false)
    return(
        <AnimateSharedLayout>
{
    expanded?(
    <ExpandedCard  param={props} setExpanded={()=>setExpanded(false)}/>
):<CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
}
       </AnimateSharedLayout> 
        
    )
}
//compact card
function CompactCard({param, setExpanded}){
    const Png=param.png;
return(
    <div className="CompactCard"
     style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
        }}
        onClick={setExpanded}>
    <div className="radialBar">
    <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}
    />
    <span>{param.title}</span>
    </div>
    <div className="detail">
<Png/>
<span>${param.value}</span>
<span>last 24 hrs</span>
    </div>

    </div>
)
}
//ExpandedCard
function ExpandedCard({param, setExpanded}){
return(
    <div className="ExpandedCard"
    style={{background:param.color.backGround,
    boxShadow:param.color.boxShadow}}
    >
    <div>
        <UilTimes onClick={setExpanded}/>
    </div>
    <span>{param.title}</span>
    <div className="chartContainer">
chart
    </div>
    <span>last 24 hours</span>

    </div>
)
}
export default Card;