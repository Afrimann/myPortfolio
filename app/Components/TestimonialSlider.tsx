import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReview from './ClientReview';
import c1 from '@/app/public/images/c1.jpg'
import c2 from '@/app/public/images/c2.jpg'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


const TestimonialSlider = () => {
    return (
        <Carousel
        additionalTransfrom={0}
        responsive={responsive}
        infinite
        itemClass='item'
        autoPlaySpeed={5000}
        arrows
        autoPlay
        >

            {/* Client   Review */}
            <ClientReview 
            image= {c1}
            name = 'Khidir Ahmad' 
            role= 'FullStack Developer' 
            />
            <ClientReview 
            image = {c2}
            name = 'Dr Nancy Woods' 
            role= 'D. Computer Science' 
            />
            <ClientReview 
            image = {c1} 
            name = 'Tamilore Adebayo' 
            role= 'Data Analyst / Software Engineer' 
            />
            <ClientReview 
            image = {c2}
            name = 'Omodele Samuel' 
            role = 'Frontend Developer' 
            />
        </Carousel>
  )
}

export default TestimonialSlider
