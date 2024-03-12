import { useState } from "react"
import { BACKEND_URL } from "../../services/BACKEND_URL"
import axios from "axios"


const AddItinerary = () => {

    const [newItinerary, setNewItinerary] = useState({
        iteneraryName: "",
        startDate: "",
        endDate: "",
        placesWillVisit: []
    })

  return (
    <div>
        <form>
        {/* "iteneraryName": "March Trip",
      "startDate": "2024-03-14T11:45", input type='datetime-local'
      "endDate": "2024-03-20T11:45", */}
      
        </form>
    </div>
  )
}

export default AddItinerary
