import { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import axios from "axios";

//import plansData from "./plans.json"; 


const PlansContext = createContext();

const PlansProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [itineraries, setItineraries] = useState([])
  
  const getItineraries = () => {
    axios
    .get(BACKEND_URL + "/itineraries")
    .then((response) => {
      console.log("These are the itineraries ===>", response.data);
      setItineraries(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getPlans = () => {
    axios
    .get(BACKEND_URL + "/plans")
    .then((response) => {
      console.log("These are the plans ===>", response.data);
      setPlans(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
 
  useEffect(() => {
    axios
    .get(BACKEND_URL + "/itineraries")
    .then((response) => {
      console.log("These are the itineraries ===>", response.data);
      setItineraries(response.data);
      getPlans()
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <PlansContext.Provider value={{ plans, setPlans, itineraries, getItineraries, setItineraries }}>
      {children}
    </PlansContext.Provider>
  );
};

export { PlansContext, PlansProvider };
