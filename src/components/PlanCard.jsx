import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlansContext} from "../context/plans.context";

// We are deconstructing props object directly in the parentheses of the function
function PlanCard ({ plan }) {
    return (
      <Link to={`/plans/${plan.id}`}>
      <div className="plan-card">

          <h1>Visit {plan.location}</h1>
          <img src={plan.thumbnail}  alt="mainphoto"  width="700px"/>
         

      </div>
    </Link>
    );
}
  
export default PlanCard;





  // {/* DANIEL */}
  // {/* <p>Places to visist in {plan.location}: {plan.placesToVisit.map((place) => <span>{place.name} {place.description}</span>)}</p> */}

