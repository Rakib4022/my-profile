import React from 'react';
import SectionTitle from './SectionTitle';
import { FaCalendarAlt } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { BsBagPlusFill } from "react-icons/bs";

const Qualification = () => {
    return (
        <div>
            <SectionTitle heading={'Qualification'} subheading={'My personal journey'}></SectionTitle>
            <div className='flex justify-center gap-4 text-2xl'>
                <h1 className='flex gap-1'> <BsBagCheck /> Education</h1>
                <h1 className='flex gap-1'> <BsBagPlusFill /> Exprience</h1>
            </div>
            <div className='mt-4 mb-8'>
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box">
                            <h1 className='text-black font-semibold'>Web Design</h1>
                            <p>Apple Inc - Spain</p>
                            <div className='flex items-center mt-2'>
                                <FaCalendarAlt />
                                2021 - present
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">
                            <h1 className='text-black font-semibold'>Web Design</h1>
                            <p>Apple Inc - Spain</p>
                            <div className='flex items-center mt-2'>
                                <FaCalendarAlt />
                                2021 - present
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">
                            <h1 className='text-black font-semibold'>Web Development</h1>
                            <p>Apple Inc - Spain</p>
                            <div className='flex items-center mt-2'>
                                <FaCalendarAlt />
                                2021 - present
                            </div>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">
                            <h1 className='text-black font-semibold'>Web Design</h1>
                            <p>Apple Inc - Spain</p>
                            <div className='flex items-center mt-2'>
                                <FaCalendarAlt />
                                2021 - present
                            </div>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Qualification;