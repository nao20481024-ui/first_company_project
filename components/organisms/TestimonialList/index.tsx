import TestimonialCard from 'components/molecules/Card/TestimonialCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const TestimonialList = () => {
  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          300: {
            spaceBetween: 10,
          },
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          clickableClass: 'swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        direction="horizontal"
        modules={[Pagination]}
        slideClass='swiper-slide'
        slideActiveClass='swiper-slide-active'
        
      >
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar.png"
            name="Platform Lead"
            company="Enterprise SaaS"
            testimony={`"Dokyoai shipped our agent review queue with eval gates and trace correlation—we finally measure model behavior under real traffic instead of guessing from demos."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-2.png"
            name="Head of Ops"
            company="Support automation"
            testimony={`"They hardened our n8n graphs with DLQ paths and queue-mode execution. Failure rates dropped before our team even noticed the spike."`}
          />
        </SwiperSlide>
        <SwiperSlide className='mt-10'>
          <TestimonialCard
            avatarSrc="/images/testimonial-avatar-3.png"
            name="Engineering Director"
            company="Data platform"
            testimony={`"RAG with cited context, refresh jobs, and offline evals—delivered as operated infrastructure, not a one-off prototype."`}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialList
