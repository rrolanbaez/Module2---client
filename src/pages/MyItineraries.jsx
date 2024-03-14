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
    const response = await axios.post(BACKEND_URL + "/itineraries", {
      ...newItinerary,
      placesWillVisit: [],
    });
    setItineraries((prev) => [...prev, response.data]);
    console.log(response);
  };

  return (
    <div className="container mt-5">
      <div className="blurry-background2"></div>
      <div className="row">
        {itineraries ? (
          itineraries.map((element, index) => (
            <div key={index} className="col-md-4 mb-3">
              <Link
                className="text-decoration-none"
                to={`/itinerary-details/${element.id}`}
              >
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{element.iteneraryName}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <button
        type="button"
        className="btn itinerary-btn"
        style={{
          backgroundColor: "#32e7c8",
          color: "white",
          position: "fixed",
          top: "140px", // Ajusta la distancia desde la parte inferior de la pantalla
          left: "20px", // Ajusta la distancia desde el lado izquierdo de la pantalla
          zIndex: "1000",
        }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => setIsAdding(true)}
      >
        Create Itinerary
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h3 className="modal-title">New itinerary</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="iteneraryName"
                    placeholder="Itinerary Name"
                    onChange={(e) =>
                      setNewItinerary((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    placeholder="Start Date"
                    onChange={(e) =>
                      setNewItinerary((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    placeholder="End Date"
                    onChange={(e) =>
                      setNewItinerary((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
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
