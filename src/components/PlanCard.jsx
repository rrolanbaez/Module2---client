import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlansContext} from "../context/plans.context";

// We are deconstructing props object directly in the parentheses of the function
function PlanCard ({ plan }) {
  
    return (
      <div className="plan-card">

          <h1>Location: {plan.location}</h1>
          
          {/* DANIEL */}
          {/* <p>Places to visist in {plan.location}: {plan.placesToVisit.map((place) => <span>{place.name} {place.description}</span>)}</p> */}

          <p>
              <h2>Places to visit in {plan.location}: </h2>
              {plan.placesToVisit.map((place) => (
                <div key={place.id}> {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>  
                </div>
              ))}
          </p>
          
          <p>
              <h2>Places to Eat {plan.location}: </h2>
              {plan.restaurants.map((place) => (
                <div key={place.id}> {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>  
                </div>
              ))}
          </p>


      </div>
    );
  }
  
  export default PlanCard;
