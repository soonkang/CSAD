import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5'; // Import the notification icon
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleOrderClick = () => {
    // Redirect to the Order page
    window.location.href = '../Order/Order.jsx';
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        <li className="p__opensans"><a href="#reviews">Reviews</a></li>
        <li className="p__opensans" onClick={handleOrderClick}>Order</li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In</a>
        <div />
        <a href="/" className="p__opensans">Register</a>
      </div>
      <div className="app__navbar-notification"> {/* Add the notification button container */}
        <IoNotificationsOutline color="#fff" fontSize={27} /> {/* Notification button */}
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="#reviews" onClick={() => setToggleMenu(false)}>Reviews</a></li>
              <li><a href="#orderNow" onClick = {() => setToggleMenu(false)}>Order</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;