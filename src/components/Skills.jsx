import React from 'react';
import { IoMdConstruct } from "react-icons/io";
import SectionTitle from './SectionTitle';


const Skills = () => {
    return (
        <div id='skill'>
            <SectionTitle heading={'Skills'} subheading={'My technical level'}></SectionTitle>
            <div className='flex gap-6'>
                <div className='w-1/2 mb-3 p-6 rounded-xl border'>
                    <p className="text-black text-xl my-4 text-center">Frontend Developer</p>
                    <div className='grid  ml-4  grid-cols-2 gap-3'>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>HTML & CSS</h1>
                                <p>Advance</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>Javascript</h1>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>Tailwind CSS
                                </h1>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>Bootstrap</h1>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>React</h1>
                                <p>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-0'>Git</h1>
                                <p>Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 mb-3 p-6 rounded-xl border'>
                    <p className="text-black text-xl my-4 text-center">Backend Developer</p>
                    <div className='grid  ml-4  grid-cols-2 space-y-3 gap-3'>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-1'>Node JS</h1>
                                <p>Bassic</p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-1'>MongoDB</h1>
                                <p>Intermediate
                                </p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-1'>Firebase</h1>
                                <p>Intermediate
                                </p>
                            </div>
                        </div>
                        <div className='flex  gap-4'>
                            <div className='mt-2'>
                                <IoMdConstruct />
                            </div>
                            <div >
                                <h1 className='font-medium mb-1'>Mongoose</h1>
                                <p>Intermediate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Skills;