import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import PlanCard from "../components/PlanCard";

function DestinationListPage () {


    

    return (
        <div className="DestinationListPage">
            <h1>Location: </h1>

            <div className='destination-list-conatiner'>
            {plan.location.map(town => {
                return <PlanCard key={town.id} town={town}/>
                })
            }
            </div>
    
        </div>
    )
}

export default DestinationListPage; 