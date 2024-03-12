
// const imgURL = "https://e0.pxfuel.com/wallpapers/40/826/desktop-wallpaper-puerto-rico-beach-puerto-rico-beach-sunset.jpg" ;
// function HomePage() {

//   return (
//     <div className="w-">
//       <h1>Home</h1>
//       <img src={imgURL} alt="home gif" className="page-img" />
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';

const imgURL = "https://e0.pxfuel.com/wallpapers/40/826/desktop-wallpaper-puerto-rico-beach-puerto-rico-beach-sunset.jpg";

function HomePage() {
  return (
    <div>
      <div className="img-container">
        <img src={imgURL} alt="home" className="page-img" />
        <h1 className="centered ojuju-custom"><strong>Coquí Compass</strong></h1>
        <p className="centered-text ojuju-custom">Your Gateway to Adventure in Puerto Rico</p>
      </div>

      

      <div className="content">
        {/* Add more content here that will appear as you scroll down */}
        <p>This is additional content that will appear as you scroll down.</p>
        {/* Example of using Bootstrap for layout */}
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <p>More content on the left</p>
            </div>
            <div className="col">
              <p>More content on the right</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
