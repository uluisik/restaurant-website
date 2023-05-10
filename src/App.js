import { Link } from "react-router-dom";
import "./App.css";
import BannerImage from "./assets/banner.jpg";
function App() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Burger 33</h1>
        <p>
          Delicious Hamburgers <br /> with 33 Spicy Mix
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
