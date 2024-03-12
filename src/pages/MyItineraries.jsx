import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import { PlansContext } from "../context/plans.context";

export default function MyItineraries() {

  const [newItinerary, setNewItinerary] = useState(null);
  const { itineraries, setItineraries } = useContext(PlansContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newItinerary) return false;
    const response = await axios.post(
      BACKEND_URL + "/itineraries",
      {...newItinerary, placesWillVisit: []}
    );
    setItineraries(prev => [...prev, response.data])
    console.log(response);
  };

  //   const getAllItineraries = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/itineraries");
  //       setItineraries(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getAllItineraries();
  //   }, []);
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column gap-4"
      style={{ height: "100vh", width: "98vw" }}
    >
      {itineraries ? (
        itineraries.map((element) => (
          <Link className="border rounded p-2"to={`/itinerary-details/${element.id}`}>
            <h3>{element.iteneraryName}</h3>
          </Link>
        ))
      ) : (
        <p>loading</p>
      )}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Itinerary
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content ">
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
                <button type="submit" className="btn btn-primary">
                  Create!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
