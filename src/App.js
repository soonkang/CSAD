import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Reviews, Gallery, Header, Intro, Laurels, DrinksMenu, FoodMenu, Footer } from './container';
import { Navbar, Feedback, Blog, Home, Service,  Comments, DF,MenuL , Photo, Paypal} from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div> 
              <Header />
              <AboutUs />
              <Reviews /> <FoodMenu /> <DrinksMenu /> <Chef /> <Intro />
              <Laurels /> <Gallery /> <FindUs />  
            </div>
          } />

          {/* Additional routing pages */}
          <Route path="/feedback" element={<Feedback />} />
          <Route path='/blog' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/discussion_forum" element={<DF />} />
          <Route path="/menulist" element={<MenuL />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/checkout" element={<Paypal />} />



        </Routes>
        <Footer/>

      </BrowserRouter>

     
    </div>
  );
};

export default App;
