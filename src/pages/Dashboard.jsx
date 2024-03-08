import { useState } from "react";
import PlanCard from "../components/PlanCard";

function DashboardPage( {plans} ){

    return (
        <div className="plan-list">
            <h1> Plans List </h1>
            <div className="plan-list-container">
                {plans.map(plan => {
                    return <PlanCard key={plan.id} plan={plan}/>
                    })
                }
            </div>


        </div>
    )


}

export default DashboardPage; 

// const productsList = products.map((product) => (
//     <Card
//       key={product.id}
//       id={product.id}
//       title={product.title}
//       price={product.price}
//       rating={product.rating}
//       description={product.description}
//       discountPercentage={product.discountPercentage}
//       stock={product.stock}
//       category={product.category}
//       brand={product.brand}
//       thumbnail={product.thumbnail}
//       deleteProduct={deleteProduct}
//     />
//   ));

// id": 1,
// "location": "Ricon",
// "placesToVisit": [
//   {
//     "name": "El Faro de Rincon",
//     "description": "The iconic Rincon Lighthouse offers panoramic views of the ocean, ideal for whale watching and sunset views.",
//     "images": ["elfaro_rincon_1.jpg", "elfaro_rincon_2.jpg"]
//   },
//   {
//     "name": "Marias Beach",
//     "description": "A popular destination for surfers and beach lovers, known for its beautiful sunsets and laid-back atmosphere.",
//     "images": ["marias_beach_1.jpg", "marias_beach_2.jpg"]
//   },
//   {
//     "name": "Sandy Beach",
//     "description": "A favorite among locals and tourists for its golden sands, clear waters, and vibrant nightlife.",
//     "images": ["sandy_beach_1.jpg", "sandy_beach_2.jpg"]
//   }
// ],
// "restaurants": [
//   {
//     "name": "Tamboo",
//     "description": "Seaside dining offering a mix of local and international cuisine, with stunning views of the ocean.",
//     "images": ["tamboo_1.jpg", "tamboo_2.jpg"]
//   },
//   {
//     "name": "The Beach House",
//     "description": "A relaxed atmosphere with an emphasis on fresh, local seafood, perfect for a casual meal by the water. It's the perfect spot to watch the sunset, and it also features live music on Sundays around sunset time.",
//     "images": ["the_beach_house_1.jpg", "the_beach_house_2.jpg"]
//   },
//   {
//     "name": "The English Rose",
//     "description": "Nestled in the hills of Rincon, offering a unique breakfast and brunch menu with breathtaking views.",
//     "images": ["the_english_rose_1.jpg", "the_english_rose_2.jpg"]
//   }