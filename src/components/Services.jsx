import React, { useEffect } from 'react';
import '../App.css';
import '../styles/Services.css'

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Services() {
  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal', // Set to horizontal
      loop: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
      autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay after user interactions
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      slidesPerView: 1, // Number of visible slides
      spaceBetween: 10, // Space between slides
    });
  }, []);

  return (
    <section className="services" id='services'>
      <div className='services-container'>
        <h1>What we do!</h1>
        <h3>Experience the power of innovation.</h3>

        <div className="swiper">
          <div
            className="swiper-wrapper"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="swiper-slide" >
              <div className='swiper-slide--wrapper'>
                <div className='slides'><img src="../assets/services11.png" alt="" /></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure hic voluptatibus corrupti esse minus natus, saepe, soluta exercitationem earum accusantium delectus cupiditate quos voluptatem officia, impedit excepturi! Ab, odit.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className='swiper-slide--wrapper'>
                <div className='slides'><img src="../assets/services12.png" alt="" /></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure hic voluptatibus corrupti esse minus natus, saepe, soluta exercitationem earum accusantium delectus cupiditate quos voluptatem officia, impedit excepturi! Ab, odit.</p>
              </div>
            </div>
            <div className="swiper-slide">
              <div className='swiper-slide--wrapper'>
                <div className='slides'><img src="../assets/services13.png" alt="" /></div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iure hic voluptatibus corrupti esse minus natus, saepe, soluta exercitationem earum accusantium delectus cupiditate quos voluptatem officia, impedit excepturi! Ab, odit.</p>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="swiper-pagination"></div>
          {/* Navigation arrows */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          {/* Scrollbar */}
          <div className="swiper-scrollbar"></div>
        </div>
      </div>

    </section>
  );
}

export default Services;
