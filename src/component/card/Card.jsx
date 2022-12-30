import { useState } from "react";
import {motion, AnimateSharedLayout} from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./card.css"
import {UilTimes} from "@iconscout/react-unicons"
import Chart from 'react-apexcharts'

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
    <motion.div 
    className="CompactCard"
     style={{
        background:param.color.backGround,
        boxShadow:param.color.boxShadow
        }}
        layoutId="expendableCard"
        onClick={setExpanded} >
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

    </motion.div>
)
}
//ExpandedCard
function ExpandedCard({param, setExpanded}){
    const data={
        options:{
            chart:{
                type:"area",
                height:"auto"
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35,
            },
            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"]
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm",
                },
            },
            grid:{
                show:true,   
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2022-12-23T00:00:00.000Z",
                    "2022-12-23T01:30:00.000Z",
                    "2022-12-23T02:30:00.000Z",
                    "2022-12-23T03:30:00.000Z",
                    "2022-12-23T04:30:00.000Z",
                    "2022-12-23T05:30:00.000Z",
                    "2022-12-23T06:30:00.000Z"
                ]
                
            },
            

        },
    };
return(
    <motion.div 
    className="ExpandedCard"
    style={{background:param.color.backGround,
    boxShadow:param.color.boxShadow}} 
    layOutId="expendableCard"
    >
    <div  style={{alignSelf:"flex-end", cursor:"pointer", color:"white"}}>
        <UilTimes onClick={setExpanded}
           
        />
    </div >
    <span>{param.title}</span>
    
    <div className="chartContainer">
<Chart options={data.options} series={param.series} type="area"  />
    </div>
    <span>last 24 hours</span>

    </motion.div>
)
}
export default Card;