import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
 // State to store all products fetched from the server
  const [allproducts, setAllProducts] = useState([]);
// Function to fetch products from the server
  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }
// useEffect hook to fetch products when the component mounts
    useEffect(() => {
      fetchInfo();
    }, [])
     // Rendering the component
  return (
    <div className="shopcategory">
       {/* Banner for the shop category */}
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
         {/* Showing the number of products displayed */}
        <p><span>Showing 1 - 12</span> out of 54 Products</p>
        <div className="shopcategory-sort">Sort by  <img src={dropdown_icon} alt="" /></div>
      </div>  {/* Displaying products */}
      <div className="shopcategory-products">
        {allproducts.map((item,i) => {
            if(props.category===item.category)
            { // Rendering each item component for the specific category
              return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>;
            }
            else
            {
              return null;
            }
        })}
      </div>
      {/* Link to explore more products */}
      <div className="shopcategory-loadmore">
      <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
