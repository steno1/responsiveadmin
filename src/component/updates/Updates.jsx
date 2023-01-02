import "./updates.css"
import { UpdatesData } from "../../data/Data"
const Updates=()=>{
return(
    <div className="updates">
{UpdatesData.map((updates)=>{
    return(
        <div className="update">
        <img src={updates.img} alt=""/>
        <div className="noti">
<div style={{marginBottom:'0.5rem'}}>
    <span>{`${updates.name} `}</span>
    <span>{updates.noti}</span>
</div>
<span>{updates.time}</span>
        </div>
        
            
        

        </div>
    )
})}
    </div>
)
  
}
export default Updates