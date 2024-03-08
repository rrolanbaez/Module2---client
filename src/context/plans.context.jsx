import { createContext, useEffect, useState } from "react";
import { BACKEND_URL } from "../../services/BACKEND_URL";
import axios from "axios";

//import plansData from "./plans.json"; 


const PlansContext = createContext();

const PlansProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get(BACKEND_URL + "/plans")
      .then((response) => {
        console.log("These are the plans ===>", response.data);
        setPlans(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PlansContext.Provider value={{ plans, setPlans }}>
      {children}
    </PlansContext.Provider>
  );
};

export { PlansContext, PlansProvider };
