import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlansContext } from "../context/plans.context";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import axios from "axios";

const PlanDetails = () => {
  const [plan, setPlan] = useState(null);
  const [addPlace, setAddPlace] = useState({adding: false, i: null});
  const [addRestaurant, setAddRestaurant] = useState({adding: false, i: null});
  const { planId } = useParams();
  const { plans, itineraries, getItineraries } = useContext(PlansContext);

  const [placeToAdd, setPlaceToAdd] = useState({
    itineraryId: 0,
    city: "",
    date: "",
    place: {},
  });

  const navigate = useNavigate();

  const handleItinerarySelect = (e, place) => {
    console.log(
      "This is the value we are adding for itineraryId",
      e.target.value
    );
    setPlaceToAdd((prev) => ({ ...prev, itineraryId: e.target.value }));
    setPlaceToAdd((prev) => ({ ...prev, place: place }));
    setPlaceToAdd((prev) => ({ ...prev, city: plan.location }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let thisItenerary = await axios.get(
        `${BACKEND_URL}/itineraries/${placeToAdd.itineraryId}`
      );

      console.log("this is the found iteneraryId we are adding to ===>", thisItenerary);

      let placesVisiting = [
        ...thisItenerary.data.placesWillVisit,
        {
          city: placeToAdd.city,
          date: placeToAdd.date,
          place: placeToAdd.place,
        },
      ];

      let updatedItenerary = await axios.put(
        BACKEND_URL + "/itineraries" + "/" + placeToAdd.itineraryId,
        {
          id: thisItenerary.data.id,
          iteneraryName: thisItenerary.data.iteneraryName,
          startDate: thisItenerary.data.startDate,
          endDate: thisItenerary.data.endDate,
          placesWillVisit: placesVisiting,
        }
      );
      console.log("This is the updated Itinerary", updatedItenerary.data);

      getItineraries();
      navigate(`/itinerary-details/${updatedItenerary.data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const thisPlan = plans.find((item) => String(item.id) === String(planId));
    console.log("This is the found place", thisPlan);
    setPlan(thisPlan);
  }, [plans]);

  return (
    <div className="item-details container mt-5 ">
      <div className="plan-card plan-details">
        {plan && (
          <>
            <div className="card mb-3">
              <div className="card-body">
                <div>
                  <h1>Places to visit in {plan.location}: </h1> 
                  {plan.placesToVisit.map((place, i) => (
                    <div key={place.id} className="mb-3 text-center">
                      {" "}
                      <h3>{place.name}</h3>
                      <p>{place.description}</p>
                      <div className="images-container">
                        {place.images.map((image) => (
                          <img src={image} alt="placetovisit" className="uniforme-img"/>
                        ))}
                      </div>
                      <div className="text-center">
                        <button className="btn custom-btn mt-2" style={{ backgroundColor: '#f29d46', color: 'white' }} onClick={() => setAddPlace( {adding: true, i: i})}>
                          Add to Itinerary
                        </button>
                      </div>
                      
                      {addPlace.adding && i === addPlace.i && (
                      <>
                        <form onSubmit={handleSubmit} className="mt-3">
                            <div className="mb-3">
                              <select className="form-select" onChange={(e) => handleItinerarySelect(e, place)}>
                                <option>Select Itenerary</option>
                                {itineraries.map((itenerary) => {
                                  return (
                                    <option value={itenerary.id}>
                                      {itenerary.iteneraryName}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="date" className="form-label">
                                Date
                                  <input
                                    type="datetime-local"
                                    className="form-control"
                                    name="date"
                                    id="date"
                                    onChange={(e) =>
                                      setPlaceToAdd((prev) => ({
                                        ...prev,
                                        date: e.target.value,
                                      }))
                                    }
                                  />
                              </label>
                            </div>

                              <button type="submit" className="btn custom-btn mt-2" style={{ backgroundColor: '#2ace82', color: 'white' }}>Add to Itenerary</button>
                          </form>
                          <button type="button" className="btn btn-outline-danger" onClick={() => setAddPlace({adding: false, i: null})}>Cancel</button>
                      </>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <h1>Places to Eat in {plan.location}: </h1>
                  {plan.restaurants.map((place, i) => (
                    <div key={place.id} className="mb-3 text-center">
                      {" "}
                      <h3>{place.name}</h3>
                      <p>{place.description}</p>
                      <div className="images-container">
                        {place.images.map((image) => (
                          <img src={image} alt="placetoeat" className="uniforme-img"/>
                        ))}
                      </div>
                      <div className="text-center">
                        <button className="btn custom-btn mt-2" style={{ backgroundColor: '#f29d46', color: 'white' }} onClick={() => setAddRestaurant({adding: true, i: i})}>
                          Add to Itinerary
                        </button>
                      </div>

                      {addRestaurant.adding && addRestaurant.i === i && (
                        <>
                          <form onSubmit={handleSubmit} className="mt-3">
                            <div className="mb-3">
                              <select className="form-select" onChange={(e) => handleItinerarySelect(e, place)}>
                              <option>Select Itenerary</option>
                                {itineraries.map((itenerary) => {
                                    return (
                                      <option value={itenerary.id}>
                                        {itenerary.iteneraryName}
                                      </option>
                                    );
                                  })}
                              </select>
                            </div>

                            <div className="mb-3">
                              <label htmlFor="date" className="form-label">
                                Date
                                <input
                                  type="datetime-local"
                                  className="form-control"
                                  name="date"
                                  id="date"
                                  onChange={(e) =>
                                    setPlaceToAdd((prev) => ({
                                      ...prev,
                                      date: e.target.value,
                                    }))
                                  }
                                />
                              </label>
                            </div>
                            <button type="submit" className="btn custom-btn mt-2" style={{ backgroundColor: '#2ace82', color: 'white' }}>Add to Itenerary</button>
                          </form>
                          <button type="button" className="btn btn-outline-danger" onClick={() => setAddRestaurant({adding: false, i : null})}>Cancel</button>
                        </>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanDetails;

