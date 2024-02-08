import React from 'react';

import { AboutUs, Chef, FindUs, Reviews, Gallery, Header, Intro, Laurels, DrinksMenu, FoodMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <FoodMenu/>
    <DrinksMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Reviews />
  </div>
);

export default App;