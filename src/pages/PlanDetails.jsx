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
    <h1>hi</h1>
        

      <h2>{plan.location}</h2>
      {/* <img src={plan.images} alt={plan.location} width="100" height="100" />
      <p> Name: {plan.placesToVisit.name}{plan.restaurantes.name}</p>
    // <p> Description: {plan.placesToVisit.description}{plan.restaurantes.description}</p> */}

      </div>
      );
    }
    
    export default PlanDetails; 