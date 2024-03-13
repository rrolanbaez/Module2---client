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
        <div class="row">
          <div class="col-md-6">
            <h1>Welcome to Puerto Rico!</h1>
            <p class="mt-3" style={{ textAlign: 'justify' }}>Gear up for a road trip like never before with the Conquí Compass Travel Website – your trusty navigator for a journey through the heart of the Caribbean! Immerse yourself in the beauty, culture, and flavors of Puerto Rico as you hit the road with a companion that goes beyond the ordinary.</p>
          </div>

          {/* image */}
          <div class="col-md-6">
            <img src="https://boricuaonline.com/wp-content/uploads/2018/08/old-san-juan.jpg" class="img-fluid rounded" alt="old san juan img"></img>
          </div>
        </div>
      </div>


        {/* Example of using Bootstrap for layout */}
        <div className="container mt-5">
          <div className="row">

            {/* CARUSEL #1 */}
            <div className="col-md-6">
              <div className="card custom-card ">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  
                  <ol className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </ol>

                  <div className="carousel-inner" style={{ borderRadius: '25px' }}>
                    <div className="carousel-item active">
                      {/* IMG1 */}
                      <img src="https://blog.amigofoods.com/wp-content/uploads/2021/01/fritanga.jpg" className="d-block w-100 card-img-top custom-card-img-top " alt="food 1" style={{ borderRadius: '25px' }}></img>   
                    </div>

                    {/* IMG2 */}
                    <div className="carousel-item">
                      <img src="https://www.sidechef.com/article/a3e1e0e6-1920-4838-b9c3-4afbd3fb22f3.jpg?d=1408x1120" className="d-block w-100 card-img-top custom-card-img-top" alt="food 2" style={{ borderRadius: '25px' }}/>
                    </div>

                    {/* IMG 3 */}
                    <div className="carousel-item">
                      <img src="https://tb-static.uber.com/prod/image-proc/processed_images/22bab655d8502ab6950d3f67ddb6cbbd/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg" className="d-block w-100 card-img-top custom-card-img-top" alt="food 3" style={{ borderRadius: '25px' }}/>
                    </div>
                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="card-body">
                  <h3 className="card-title mb-3">Indulge in Culinary Delights</h3>
                  <p className="card-text" style={{ textAlign: 'justify' }}>Savor the diverse flavors of Puerto Rican cuisine as you explore the island's culinary landscape. From seaside seafood shacks to hidden gems serving traditional favorites, our app guides you to the best restaurants. Immerse yourself in the local gastronomy, making every meal a delicious part of your Puerto Rican adventure.</p>
                </div>

              </div>
            </div>

            {/* Carusel #2 */}
            <div className="col-md-6">
              <div className="card custom-card ">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
  
                  <ol className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </ol>

                  <div className="carousel-inner" style={{ borderRadius: '25px' }}>
                    <div className="carousel-item active">
                      {/* IMG1 */}
                      <img src="https://i0.wp.com/evemuseografia.com/wp-content/uploads/2014/08/museo-de-vida-silvestre.jpg?ssl=1" className="d-block w-100 card-img-top custom-card-img-top " alt="food 1" style={{ borderRadius: '25px' }}></img>   
                    </div>

                    {/* IMG2 */}
                    <div className="carousel-item">
                      <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2c/80/08.jpg" className="d-block w-100 card-img-top custom-card-img-top" alt="food 2" style={{ borderRadius: '25px' }}/>
                    </div>

                    {/* IMG 3 */}
                    <div className="carousel-item">
                      <img src="https://www.visittheusa.com/sites/default/files/styles/state_hero_l_x2/public/images/hero_media_image/2020-03/131cfc9f-5f68-4aed-b2f8-267d0d3b5382.jpeg?h=a98222f4&itok=Ab1voAPV" className="d-block w-100 card-img-top custom-card-img-top" alt="food 3" style={{ borderRadius: '25px' }}/>
                    </div>
                  </div>
          
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <div className="card-body">
                <h3 className="card-title mb-3">Uncover Cultural Treasures in Museums</h3>
                <p className="card-text" style={{ textAlign: 'justify' }}>Immerse yourself in Puerto Rico's rich history and art scene by exploring its museums. From the Ponce Art Museum, showcasing Puerto Rican and European art, to historical artifacts at La Casa del Rey in Old San Juan, our app directs you to cultural hubs that tell the captivating stories of the island's past.</p>
                </div>

              </div>
            </div>
              


            {/* Carusel #3 */}

            <div className="col-md-6">
              <div className="card custom-card ">
                <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
  
                <ol className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </ol>

                  <div className="carousel-inner" style={{ borderRadius: '25px' }}>
                    <div className="carousel-item active">
                      {/* IMG1 */}
                      <img src="https://www.visittheusa.com/sites/default/files/styles/state_hero_l_x2/public/images/hero_media_image/2019-01/782a508eb3ffb582cc69e8911ad0c821.jpeg?h=48d516a6&itok=eHdLpxKe" className="d-block w-100 card-img-top custom-card-img-top " alt="Beaches" style={{ borderRadius: '25px' }}></img>   
                    </div>

                    {/* IMG2 */}
                    <div className="carousel-item">
                      <img src=" https://www.airfungames.com/wp-content/uploads/2018/05/How-To-Host-A-Beach-Party.jpg" className="d-block w-100 card-img-top custom-card-img-top" alt="Beaches 2" style={{ borderRadius: '25px' }}/>
                    </div>

                    {/* IMG 3 */}
                    <div className="carousel-item">
                      <img src=" https://www.puertorico.com/wp-content/uploads/2022/10/best-surfing-spots-in-puerto-rico.jpg" className="d-block w-100 card-img-top custom-card-img-top" alt="Beaches 3" style={{ borderRadius: '25px' }}/>
                    </div>
                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                 
                </div>

                <div className="card-body">
                  <h3 className="card-title mb-3">Relax on Pristine Beaches</h3>
                  <p className="card-text" style={{ textAlign: 'justify' }}>Picture yourself on the golden sands of Luquillo Beach, feel the gentle breeze at Balneario Monserrate, or discover hidden coves off the beaten path. Our app is your ticket to the most breathtaking beaches in Puerto Rico. Dive into crystal-clear waters, soak up the sun, and experience the magic of the Caribbean shoreline.</p>
                </div>
              </div>
            </div> 



            {/* Carusel #4 */}
            <div className="col-md-6">
              <div className="card custom-card ">
                <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
  
                  <ol className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </ol>

                  <div className="carousel-inner" style={{ borderRadius: '25px' }}>
                    <div className="carousel-item active">
                      {/* IMG1 */}
                      <img src="https://image-tc.galaxy.tf/wijpeg-apj8niyo20pt0864sthfceari/san-felipe-castle-fort_standard.jpg?crop=112%2C0%2C1697%2C1273&width=1140" className="d-block w-100 card-img-top custom-card-img-top" alt="Beaches" style={{ borderRadius: '25px' }}></img>
                    </div>

                    {/* IMG2 */}
                    <div className="carousel-item">
                      <img src="https://www.visittheusa.com/sites/default/files/styles/state_hero_l_x2/public/images/hero_media_image/2019-01/28c3715bd1ab96c6448b70a3f1e4c71e.jpeg?h=4684bf95&itok=pMUy_fuM" className="d-block w-100 card-img-top custom-card-img-top" alt="food 2" style={{ borderRadius: '25px' }}/>
                    </div>

                    {/* IMG 3 */}
                    <div className="carousel-item">
                      <img src="https://www.discoverpuertorico.com/sites/default/files/listing_images/profile/8527/Parque-de-Bombas--1--69e994c05056a36_69e99669-5056-a36a-08028cd58e5fd037.jpg" className="d-block w-100 card-img-top custom-card-img-top" alt="food 3" style={{ borderRadius: '25px' }}/>
                    </div>
                  </div>

                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                   </button>
                 
                </div>

                <div className="card-body">
                  <h3 class="card-title mb-3">Step Back in Time at Historical Places</h3>
                  <p className="card-text" style={{ textAlign: 'justify' }}>Puerto Rico's history comes alive at every turn. Visit the historic La Fortaleza in Old San Juan, explore the ancient Taino petroglyphs at Caguana Indigenous Ceremonial Park, or wander through the colonial charm of San Germán. With our website, you'll step back in time, discovering the captivating history that shaped Puerto Rico.</p>
                </div>
              </div>
            </div> 



          </div>
        </div>
    </div>

  );
}

export default HomePage;