import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Cooking is my canvas; each dish, a masterpiece in the making.</p>
        </div>
        <p className="p__opensans">With each carefully selected ingredient, I artfully craft a symphony of flavor, texture, and passion, weaving together a culinary masterpiece that beckons diners to embark on a tantalizing journey through my imaginative kitchen creations.</p>
      </div>

      <div className="app__chef-sign">
        <p>Gordan Ramsay</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;