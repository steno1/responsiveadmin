import './cards.css'
import {CardData} from "../../data/Data.js"
import Card from "../card/Card.jsx"
const Cards=()=>{
    return(
        <div className='cards'>
        {CardData.map((card, index)=>{
return(
    <div className='parentContainer' key={index}>
<Card
    title={card.title}
    color={card.color}
    barValue={card.barValue}
    value={card.value}
    png={card.png}
    series={card.series}
/>
    </div>
)
        })}
        </div>
    )
}
export default Cards;