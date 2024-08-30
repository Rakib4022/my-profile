import React from 'react';
import img1 from '../../../public/rakib1.jpg'
import Image from 'next/image';

const Aboutpage = () => {
    return (
        <div>
            This is new about page.
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <Image
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Rakib</h2>
                    <p>I am profetional fontend developer in nextjs.</p>
                    <div className="card-actions justify-end">
                        <button className="btn uppercase btn-primary">more details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;