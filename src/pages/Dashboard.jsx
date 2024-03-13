import { useState } from "react";
import PlanCard from "../components/PlanCard";

function DashboardPage( {plans} ){

    return (
        <div className="plan-list container mt-3">
            <h1 className="text-center" style={{ marginBottom: '30px' }}>Towns to Visit in Puerto Rico:</h1>
            <div className="plan-list-container row row-cols-1 row-cols-md-3 g-4">
                {plans.map(plan => {
                    return <PlanCard key={plan.id} plan={plan}/>
                    })
                }
            </div>


        </div>
    )


}

export default DashboardPage; 

