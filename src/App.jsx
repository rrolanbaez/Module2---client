import { useState, useContext } from 'react'
import { PlansContext } from './context/plans.context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashboardPage from './pages/Dashboard';


// import plansJSON from '..plans.json';

import './App.css'


  function App() {

    const { plans, setPlans, ids, setIds } = useContext(PlansContext)
  
    const handleAddProduct = (newPlans) => {
      setPlans([newPlans, ...plans]);
    };

  return (
    <div>
        <Routes>

          <Route path="/"  element={<DashboardPage plans={plans}/>}/>
          
        </Routes>
     
    </div>
  )
}

export default App;


{/* <div>
{ projects.length > 0 ?
  <>
    {projects.map((project) => {
        return(
          <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        )
      })
    }
  </>
  : <p>Loading...</p>
}
</div> */}
