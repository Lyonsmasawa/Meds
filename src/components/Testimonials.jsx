import React from 'react'
import './testimonials.css'
import ME from '../../assets/me.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

        <Swiper className="container testimonials__container"
         modules={[Pagination]} spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}scrollbar={{ draggable: true }}>
          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="client" />
            </div>
            <h5 className="client__name">anonymous</h5>
              <small className='client__review'>
                Great experience all round with these guys. They recently got me placed into a senior position with a brilliant SME. Great communication and great to be treated like a person rather than a “candidate” and would definitely recommend.
              </small>
          </SwiperSlide>

          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="client" />
            </div>
            <h5 className="client__name">Arsene Lupin</h5>
              <small className='client__review'>
                I have been lucky enough to be signed up with Express care team, for a while now. The team are professional and friendly and, I have been placed appropriately and thoughtfully. 
              </small>
          </SwiperSlide>

          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="client" />
            </div>
            <h5 className="client__name">anonymous</h5>
              <small className='client__review'>
                Such an amazing recruitment company! The team really care and take the time to find out exactly what you want and take away all the stress of recruitment.
              </small>
          </SwiperSlide>

          <SwiperSlide className="testimonials">
            <div className="client__avatar">
              <img src={ME} alt="client" />
            </div>
            <h5 className="client__name">anonymous</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque necessitatibus veritatis? Blanditiis dolorum dicta voluptatibus, ipsam consectetur ducimus voluptates cum, vel sequi ullam voluptas magni veniam. Voluptates, dolorem autem?
              </small>
          </SwiperSlide>  
        </Swiper>
    </section>
  )
}

export default Testimonials