import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './FoodMenu.css';

const FoodMenu = () => (
  <div className="app__FoodMenu flex__center section__padding" id="menu">
    <div className="app__FoodMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Food Menu</h1>
    </div>

    <div className="app__FoodMenu-menu">
      <div className="app__FoodMenu-menu_mains  flex__center">
        <p className="app__FoodMenu-menu_heading">Mains Courses</p>
        <div className="app__FoodMenu_menu_items">
          {data.mains.map((mains, index) => (
            <MenuItem key={mains.title + index} title={mains.title} price={mains.price} tags={mains.tags} />
          ))}
        </div>
      </div>

      <div className="app__FoodMenu-menu_img">
        <img src={images.food} alt="menu__img" />
      </div>

      <div className="app__FoodMenu-menu_sides  flex__center">
        <p className="app__FoodMenu-menu_heading">Sides Dishes</p>
        <div className="app__FoodMenu_menu_items">
          {data.sides.map((sides, index) => (
            <MenuItem key={sides.title + index} title={sides.title} price={sides.price} tags={sides.tags} />
          ))}
        </div>
      </div>
    </div>

    
  </div>
);

export default FoodMenu;