import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlansContext } from "../context/plans.context";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import axios from "axios";

const PlanDetails = () => {
  const [plan, setPlan] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
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

      console.log(
        "this is the found iteneraryId we are adding to ===>",
        thisItenerary
      );

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
    <div className="item-details">
      <div className="plan-card">
        {plan && (
          <>
            <h1>Location: {plan.location}</h1>

            <div>
              <h2>Places to visit in {plan.location}: </h2>
              {plan.placesToVisit.map((place) => (
                <div key={place.id}>
                  {" "}
                  {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  {place.images.map((image) => (
                    <img src={image} alt="placetovisit" />
                  ))}
                  <button onClick={() => setIsAdding(true)}>
                    Add to Itinerary
                  </button>
                  {isAdding && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <select
                          onChange={(e) => handleItinerarySelect(e, place)}
                        >
                          <option>Select Itenerary</option>
                          {itineraries.map((itenerary) => {
                            return (
                              <option value={itenerary.id}>
                                {itenerary.iteneraryName}
                              </option>
                            );
                          })}
                        </select>
                        <label>
                          Date
                          <input
                            type="datetime-local"
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

                        <button type="submit">Add to Itenerary</button>
                      </form>

                      <button onClick={() => setIsAdding(false)}>Cancel</button>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h2>Places to Eat {plan.location}: </h2>
              {plan.restaurants.map((place) => (
                <div key={place.id}>
                  {" "}
                  {/* Adding a key for list rendering optimization */}
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  {place.images.map((image) => (
                    <img src={image} alt="placetoeat" />
                  ))}
                  <button onClick={() => setIsAdding(true)}>
                    Add to Itinerary
                  </button>
                  {isAdding && (
                    <>
                      <form onSubmit={handleSubmit}>
                        <select
                          onChange={(e) => handleItinerarySelect(e, place)}
                        >
                          {itineraries.map((itenerary) => {
                            <option value={itenerary.id}>
                              {itenerary.name}
                            </option>;
                          })}
                        </select>
                        <label>
                          Date
                          <input
                            type="datetime"
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

                        <button type="submit">Add to Itenerary</button>
                      </form>

                      <button onClick={() => setIsAdding(false)}>Cancel</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanDetails;

{
  /* DANIEL */
}
{
  /* <p>Places to visist in {plan.location}: {plan.placesToVisit.map((place) => <span>{place.name} {place.description}</span>)}</p> */
}
