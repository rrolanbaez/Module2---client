import { useState, useContext } from "react";
import { PlansContext } from "./context/plans.context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/Dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PlanDetails from "./pages/PlanDetails";
import HomePage from "./pages/HomePage";
import IteneraryDetail from "./pages/IteneraryDetail";

// import plansJSON from '..plans.json';

import "./App.css";
import MyItineraries from "./pages/MyItineraries";

function App() {
  const { plans, setPlans, ids, setIds } = useContext(PlansContext);

  const handleAddProduct = (newPlans) => {
    setPlans([newPlans, ...plans]);
  };

  return (
    <div className="w">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<DashboardPage plans={plans} />} />
        <Route path="/plans/:planId" element={<PlanDetails />} />

        {/* <Route path='/plan' element={<DestinationListPage />}/> */}

        <Route path='/itinerary-details/:itineraryId' element={<IteneraryDetail />} />
        <Route path='/my-itineraries' element={<MyItineraries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
