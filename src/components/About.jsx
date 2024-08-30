import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div id='about'>
            <SectionTitle heading={'About'} subheading={'My introduction'}></SectionTitle>
            <div className='flex justify-between'>
                <div></div>
                <div className='w-1/2 mb-6  space-y-6'>
                    <div className=' flex gap-4'>
                        <div className="border bg-base-100 w-96 rounded-xl text-center">
                            <div className="space-y-2 m-3">
                                <div className='card-title justify-center'>
                                    <FaBriefcase />
                                </div>
                                <h2 className="">Exprience!</h2>
                                <p>1 Years Working</p>
                            </div>
                        </div>
                        <div className="border bg-base-100 w-96 rounded-xl text-center">
                            <div className="space-y-2 m-3">
                                <div className='card-title justify-center'>
                                    <FaBriefcase />
                                </div>
                                <h2 className="">Exprience!</h2>
                                <p>1 Years Working</p>
                            </div>
                        </div>
                        <div className="border bg-base-100 w-96 rounded-xl text-center">
                            <div className="space-y-2 m-3">
                                <div className='card-title justify-center'>
                                    <FaBriefcase />
                                </div>
                                <h2 className="">Exprience!</h2>
                                <p>1 Years Working</p>
                            </div>
                        </div>

                    </div>
                    <p>Shahadat Hossen is an experienced full-stack developer from Bangladesh who develops high-quality
                        web and mobile applications, collaborates well with others, and has excellent communication skills.
                    </p>
                    <button className=" bg-gray-700 rounded-lg btn-neutral p-4 uppercase">Download cv</button>
                </div>
            </div>

        </div>
    );
};

export default About;