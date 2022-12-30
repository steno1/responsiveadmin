import "./MainDash.css"
import Cards from "../cards/Cards";
import BasicTable from "../table/Table";
const MainDash=()=>{
    return(
<div className="maindash">
<h1>Dashboard</h1>
<Cards/>

<BasicTable/>
</div>
    )
}
export default MainDash;
