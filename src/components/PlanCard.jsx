import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlansContext} from "../context/plans.context";

// We are deconstructing props object directly in the parentheses of the function
function PlanCard ({ plan }) {
    return (
      <Link to={`/plans/${plan.id}`} className="text-decoration-none">
      <div className="card plan-card m-2" style={{ width: '18rem' }}>

        <img src={plan.thumbnail} className="card-img-top" alt={plan.location} />
        
        <div className="card-body">
              <h5 className="card-title text-center">Visit {plan.location}</h5>
        </div>
         

      </div>
    </Link>
    );
}
  
export default PlanCard;

