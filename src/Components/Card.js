import React from 'react'
import img1 from "../Images/1.jpg";
import img2 from "../Images/2";
import img3 from "../Images/3.jpg"
import img4 from "../Images/4";
import img5 from "../Images/5.jpg"
import img6 from "../Images/6"
import img7 from "../Images/7.jpg"
import img8  from "../Images/8"
import "../Components/Card.css"

export default function Card() {
  return (
    <section id='header3'>
    <div className='divmain'>
     <div className='product'>
        <img src={img1} alt="" />
        <h2>Branded</h2>
        <h2>Price : $200</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img2} alt="" />
        <h2>Office wear</h2>
        <h2>Price : $200</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img3} alt="" />
        <h2>College wear</h2>
        <h2>Price : $300</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img4} alt="" />
        <h2>Sports shoe</h2>
        <h2>Price : $500</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
    </div>



    <div className='divmain'>
     <div className='product'>
        <img src={img5} alt="" />
        <h2>Girls wear</h2>
        <h2>Price : $500</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product1'>
        <img src={img6} alt="" />
        <h2>Office casuals</h2>
        <h2>Price : $500</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product2'>
        <img src={img7} alt="" />
        <h2>Unisex wears</h2>
        <h2>Price : $200</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>
     <div className='product3'>
        <img src={img8} alt="" />
        <h2>Ladies wear</h2>
        <h2>Price : $550</h2>
      <a href='' className='btn'>Buy Now</a>
     </div>

    </div>
    </section>
  )
}
