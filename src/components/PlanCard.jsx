import { Link, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { PlansContext} from "../context/plans.context";

// We are deconstructing props object directly in the parentheses of the function
function PlanCard ({ plan }) {
    return (
      <Link to={`/plans/${plan.id}`}>
      <div className="plan-card">

          <h1>Location: {plan.location}</h1>
          
          {/* DANIEL */}
          {/* <p>Places to visist in {plan.location}: {plan.placesToVisit.map((place) => <span>{place.name} {place.description}</span>)}</p> */}

          <div>
              <h2>Places to visit in {plan.location}: </h2>
              {plan.placesToVisit.map((place) => (
                <div key={place.id}> {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                
                 {place.images.map((image)=> 
                  <img src={image} alt="placetovisit" />
                 )}
                </div>
              ))}
          </div>
          
          <div>
              <h2>Places to Eat {plan.location}: </h2>
              {plan.restaurants.map((place) => (
                <div key={place.id}> {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>  

                  {place.images.map((image) => 
                    <img src={image} alt="placetoeat"/>
                  )}
                </div>
              ))}
          </div>


      </div>
    </Link>
    );
  }
  
  export default PlanCard;
