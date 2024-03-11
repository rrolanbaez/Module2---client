import { useState } from "react";
import PlanCard from "../components/PlanCard";

function DashboardPage( {plans} ){

    return (
        <div className="plan-list">
            <h1> Plans List </h1>
            <div className="plan-list-container">
                {plans.map(plan => {
                    return <PlanCard key={plan.id} plan={plan}/>
                    })
                }
            </div>


        </div>
    )


}

export default DashboardPage; 

