import { useEffect, useState, useContext } from "react"
import { PlansContext } from "../context/plans.context"
import { useParams } from "react-router-dom"

const IteneraryDetail = () => {

    const { itineraries } = useContext(PlansContext)

    const [thisItinerary, setThisItinerary] = useState(null)

    const { itineraryId } = useParams()

    useEffect(() => {

        let foundItinerary = itineraries.find((itinerary) => itinerary.id == itineraryId)
        setThisItinerary(foundItinerary)

    }, [itineraries])

  return (
    <div>
        {thisItinerary &&
        
        <div>
            <h2>{thisItinerary.iteneraryName}</h2>
            <p>{thisItinerary.startDate}</p>
            <p>{thisItinerary.endDate}</p>
        </div>
        
        }
    </div>
  )
}

export default IteneraryDetail