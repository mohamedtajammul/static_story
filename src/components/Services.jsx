import React, { useEffect } from 'react';
import '../App.css';
import '../styles/Services.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Services() {

  return (
    <section className="services" id='services'>
      <div className='services-container'>
        <h1>What we do!</h1>
        <h3>Experience the power of innovation.</h3>
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay,  A11y]}
          spaceBetween={70}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
           autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Keep autoplay after user interactions
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
            <div className='swiper-slide--wrapper'>
              <div className='slides'><img src="../assets/services11.png" alt="" /></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut esse ea dignissimos, amet molestias asperiores sed unde molestiae quaerat dolore nesciunt sint eos qui. Harum porro animi impedit fugit. Est natus doloremque officia in, suscipit ab ad corrupti facilis, dolore ullam obcaecati! Vero nemo voluptatem impedit vitae! Reprehenderit numquam est, ipsa explicabo mollitia, eligendi autem porro asperiores impedit aliquam iure odit modi quaerat illum, nesciunt nemo dolor iste ipsum. Necessitatibus provident mollitia eligendi eum tempore pariatur odit aliquam cumque sint! Exercitationem culpa hic perferendis repudiandae nobis sit doloribus esse, alias ratione excepturi sint? Nihil dolore impedit incidunt voluptate deleniti?</p>
            </div>
          </SwiperSlide>
           <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
            <div className='swiper-slide--wrapper'>
              <div className='slides'><img src="../assets/services12.png" alt="" /></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut esse ea dignissimos, amet molestias asperiores sed unde molestiae quaerat dolore nesciunt sint eos qui. Harum porro animi impedit fugit. Est natus doloremque officia in, suscipit ab ad corrupti facilis, dolore ullam obcaecati! Vero nemo voluptatem impedit vitae! Reprehenderit numquam est, ipsa explicabo mollitia, eligendi autem porro asperiores impedit aliquam iure odit modi quaerat illum, nesciunt nemo dolor iste ipsum. Necessitatibus provident mollitia eligendi eum tempore pariatur odit aliquam cumque sint! Exercitationem culpa hic perferendis repudiandae nobis sit doloribus esse, alias ratione excepturi sint? Nihil dolore impedit incidunt voluptate deleniti?</p>
            </div>
          </SwiperSlide>
           <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
            <div className='swiper-slide--wrapper'>
              <div className='slides'><img src="../assets/services13.png" alt="" /></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut esse ea dignissimos, amet molestias asperiores sed unde molestiae quaerat dolore nesciunt sint eos qui. Harum porro animi impedit fugit. Est natus doloremque officia in, suscipit ab ad corrupti facilis, dolore ullam obcaecati! Vero nemo voluptatem impedit vitae! Reprehenderit numquam est, ipsa explicabo mollitia, eligendi autem porro asperiores impedit aliquam iure odit modi quaerat illum, nesciunt nemo dolor iste ipsum. Necessitatibus provident mollitia eligendi eum tempore pariatur odit aliquam cumque sint! Exercitationem culpa hic perferendis repudiandae nobis sit doloribus esse, alias ratione excepturi sint? Nihil dolore impedit incidunt voluptate deleniti?</p>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
            <div className='swiper-slide--wrapper'>
              <div className='slides'><img src="../assets/services13.png" alt="" /></div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut esse ea dignissimos, amet molestias asperiores sed unde molestiae quaerat dolore nesciunt sint eos qui. Harum porro animi impedit fugit. Est natus doloremque officia in, suscipit ab ad corrupti facilis, dolore ullam obcaecati! Vero nemo voluptatem impedit vitae! Reprehenderit numquam est, ipsa explicabo mollitia, eligendi autem porro asperiores impedit aliquam iure odit modi quaerat illum, nesciunt nemo dolor iste ipsum. Necessitatibus provident mollitia eligendi eum tempore pariatur odit aliquam cumque sint! Exercitationem culpa hic perferendis repudiandae nobis sit doloribus esse, alias ratione excepturi sint? Nihil dolore impedit incidunt voluptate deleniti?</p>
            </div>
          </SwiperSlide>
        </Swiper>
       
      </div>

    </section>
  );
}

export default Services;
