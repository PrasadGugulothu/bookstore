import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">
          Happiness is not in money but in shopping
        </h1>
        <img
          src="https://freedesignfile.com/upload/2017/08/People-shopping-fashion-background-vector-01.jpg"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Having those needs met allows you to reach goals and have unique
          experiences, which is in turn another kind of satisfaction. Everyone
          likes having new things every now and again. Whether you want to bring
          a new look to a room or your wardrobe, shopping to incorporate
          something new into your life is always refreshing.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://freedesignfile.com/upload/2017/08/People-shopping-fashion-background-vector-01.jpg"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
