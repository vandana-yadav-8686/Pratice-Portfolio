import React from 'react';
import './Testimonial.css';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  // Array for individual client 
  const Clients = [
    {
      img: profilePic1,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, ligula sit amet fermentum eleifend, odio ex ultricies odio."
    },
    {
      img: profilePic2,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, ligula sit amet fermentum eleifend, odio ex ultricies odio."
    },
    {
      img: profilePic3,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, ligula sit amet fermentum eleifend, odio ex ultricies odio."
    },
    {
      img: profilePic4,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, ligula sit amet fermentum eleifend, odio ex ultricies odio."
    },
    
  ];

  return (
    <div className="testimonial" id='Testimonial'>
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>from me</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: '#C1F5FF' }} ></div>
      </div>
      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testiContent">
            <img src={client.img} alt="" />
            <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
