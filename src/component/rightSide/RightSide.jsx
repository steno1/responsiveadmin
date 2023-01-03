import "./rightside.css"
import Updates from "../updates/Updates";
import CustomerReview from "../customerReview/CustomerReview";
const RightSide=()=>{
    return(
        <div className="RightSide">
         <div>
            <h2>Updates</h2>
            <Updates/>
         </div>
         <div>
            <h3>Customer Review</h3>
            <CustomerReview/>
         </div>   
        </div>
    );
};
export default RightSide;