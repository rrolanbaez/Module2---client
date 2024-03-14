import { useEffect, useState, useContext } from "react";
import { PlansContext } from "../context/plans.context";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import axios from "axios";

const IteneraryDetail = () => {
  const { itineraries, getItineraries } = useContext(PlansContext);

  const [thisItinerary, setThisItinerary] = useState(null);
  const [newItinerary, setNewItinerary] = useState(null);

  const {itineraryId} = useParams()

  const navigate = useNavigate()

  const removeFromItinerary = (index) => {
    let ourItinerary = {...thisItinerary}
    ourItinerary.placesWillVisit.splice(index, 1)

    axios.put(`${BACKEND_URL}/itineraries/${itineraryId}`, ourItinerary)
      .then((response) => {
        console.log("Updated itinerary ===>", response.data)
        getItineraries()
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newItinerary) return false;
      const response = await axios.put(
        BACKEND_URL + "/itineraries/" + itineraryId,
        newItinerary 
      );
  
      console.log("Updated Itinerary===>", response.data)
  
      getItineraries()

    } catch(err) {
      console.log(err)
    }

  };

  const deleteItinerary = (id) => {
    axios.delete(BACKEND_URL + '/itineraries/' + id)
      .then((response) => {
        console.log("Removal response ===>", response.data)
        getItineraries()
        navigate('/my-itineraries')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    let foundItinerary = itineraries.find((itinerary) => itinerary.id === Number(itineraryId))
    
    setThisItinerary(foundItinerary);
    setNewItinerary(foundItinerary)
  }, [itineraries]);

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="blurry-background"></div>
      {thisItinerary && (
        <div className="card mb-5" style={{ maxWidth: '640px' }}>
          <div className="card-body p-4">
            <h1 className="card-title text-center">{thisItinerary.iteneraryName}</h1>
            <p className="card-text text-center">{thisItinerary.startDate} ~ {thisItinerary.endDate}</p>

            <div className="d-flex justify-content-start gap-2 mb-3">
              <button
                type="button"
                className="btn btn-outline-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Edit Itinerary Details
              </button>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => deleteItinerary(thisItinerary.id)}
              >
                Delete Itinerary
              </button>
            </div> 

            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >

            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                      <h3>New itinerary</h3>

                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body d-flex justify-content-center align-items-center flex-column gap-4">
                      <input
                        type="text"
                        className="modal-title fs-5 w-50"
                        name="iteneraryName"
                        value={newItinerary.iteneraryName}
                        onChange={(e) =>
                          setNewItinerary((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="date"
                        value={newItinerary.startDate}
                        className="modal-title fs-5 w-50"
                        name="startDate"
                        onChange={(e) =>
                          setNewItinerary((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          }))
                        }
                      />
                      <input
                        type="date"
                        className="modal-title fs-5 w-50"
                        name="endDate"
                        value={newItinerary.endDate}
                        onChange={(e) =>
                          setNewItinerary((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          }))
                        }
                      />
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                        Edit!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <>
              {
                thisItinerary.placesWillVisit.length > 0 &&
                <>
                    {
                      thisItinerary.placesWillVisit.map((place, index) => {
                        return (
                          <div className="text-center mb-3">
                            <h3>{place.place.name}</h3>        
                            <button className="btn btn-outline-warning" onClick={() => removeFromItinerary(index)}>Remove from Itinerary</button>
                          </div>
                        )
                      })
                    }
                </>
              }
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default IteneraryDetail;
