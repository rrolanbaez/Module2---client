const imgURL = " https://cdn3.vectorstock.com/i/1000x1000/59/42/ecommerce-icon-vector-4525942.jpg " ;
function HomePage() {

  return (
    <div className="w-">
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}

export default HomePage;
