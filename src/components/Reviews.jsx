'use client'
import { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import SectionTitle from "./SectionTitle";



const Reviews = () => {
    // const [reviews, setReviews] = useState([])

    // useState(() => {
    //     fetch('/data/reviews.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setReviews(data)
    //             console.log(data.data);

    //         })
    //         .catch((error) => console.error('Error fetching data:', error))
    // }, [])

    const reviews = [
        {
            "_id": "643010e0f5a7e52ce1e8fa65",
            "name": "Jane Doe",
            "details": "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            "rating": 3
        },
        {
            "_id": "643010f9f5a7e52ce1e8fa66",
            "name": "John Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 2
        },
        {
            "_id": "6430110af5a7e52ce1e8fa67",
            "name": "MJ Doe",
            "details": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)",
            "rating": 5
        },
        {
            "_id": "64301123f5a7e52ce1e8fa68",
            "name": "Sarah Smith",
            "details": "I found the product to be incredibly useful and easy to use. The interface is intuitive, and it has all the features I need. Highly recommend it!",
            "rating": 4
        },
        {
            "_id": "6430113af5a7e52ce1e8fa69",
            "name": "Robert Johnson",
            "details": "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
            "rating": 5
        }
    ];

    return (
        <div className="py-6">
            <SectionTitle
                heading={'My Clients Reviews'}
                subheading={'Testimonial'}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>

                                <div className="text-center py-4 flex flex-col items-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />

                                    <p className="px-16 py-8">{review.details}</p>
                                    <h1 className="text-[#CD9003]">{review.name}</h1>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;