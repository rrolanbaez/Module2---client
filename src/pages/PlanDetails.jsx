import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlansContext } from '../context/plans.context';



function PlanDetails() {
  const { planId } = useParams();
  const { plans } = useContext(PlansContext)
  const plan = plans.find((item) =>String(item.id)=== String(planId));
  console.log(plan)
  if (!plan) {
    return <p>Item not found</p>;
  }

  return (
    <div className='item-details'>
   
      <div className="plan-card">


<h1>Location: {plan.location}</h1>


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

      </div>
      );
    }
    
    export default PlanDetails; 


  
{/* DANIEL */}
{/* <p>Places to visist in {plan.location}: {plan.placesToVisit.map((place) => <span>{place.name} {place.description}</span>)}</p> */}
