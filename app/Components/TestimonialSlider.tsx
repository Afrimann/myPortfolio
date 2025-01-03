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
            review='Peter is a dedicated and committed developer. He keeps the requirements and satisfaction of the client in mind and also knows best practices and uses Industry Standards. He is indeed good for any job.'
            />
            <ClientReview 
            image = {c2}
            name = 'Dr Nonso' 
            role= 'Client'
            review='I have given Omotosho paid and unpaid jobs and the energy he gives to both are exactly the same. He is a person who pays attention to details and  works within time frame assigned to him. He is a professional in his field.'
            />
            <ClientReview 
            image = {c1} 
            name = 'Tamilore Adebayo' 
            role= 'Data Analyst / Software Engineer'
            review='Peter is a friend of mine and we have worked together many times, development and non-development jobs. All i have to say is that he is committed and cares about the receiver of his expertise more than anything and i know that&&apos;s a good characterisitic of a professional in this field.'
            
            />
            <ClientReview 
            image = {c2}
            name = 'Omodele Samuel' 
            role = 'Frontend Developer'
            review= 'Omohh!, as i fondly call him is a good frontend developer He is a friend and aso a co-worker. His passion to see everythuthat deals with tech delivered in the best condition possible is captivating.He is the best man for the best job. ' 
            />
        </Carousel>
  )
}

export default TestimonialSlider
