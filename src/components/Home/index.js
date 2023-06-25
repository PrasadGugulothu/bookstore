import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Books enhance your vocabulary.</h1>
        <img
          src="https://media.istockphoto.com/id/1222563369/photo/bookstore-shop-exterior-with-books-and-textbooks-in-showcase.jpg?s=612x612&w=0&k=20&c=nvfvNWLiP6LKfhfTUVYppVRmzlpH8-ujIxk5jOtDcCE="
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Books play a significant role in our life, especially for children.
          Reading books increases the knowledge of students, improves their
          intellect, makes students aware of the various societies, and
          civilizations across the globe. Moreover, reading books enhances
          imagination and creativity in the student's mind.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://media.istockphoto.com/id/1222563369/photo/bookstore-shop-exterior-with-books-and-textbooks-in-showcase.jpg?s=612x612&w=0&k=20&c=nvfvNWLiP6LKfhfTUVYppVRmzlpH8-ujIxk5jOtDcCE="
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
