
import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import SectionTitle from './SectionTitle';
import profile from '../../public/profile.jpg'
import profile2 from '../../public/visit3 (1).png'
import profile3 from '../../public/visit4.jpeg'
// import profile4 from '../../public/visit5.jpeg'
import profile5 from '../../public/visit6.jpeg'
import profile6 from '../../public/visit5.jpg'

const Porfolio = () => {
    return (
        <div>
            <SectionTitle heading={'Portfolio'} subheading={'Most recent works'}></SectionTitle>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <a role="tab" className="tab tab-active">All</a>
                    <a role="tab" className="tab">Desing</a>
                    <a role="tab" className="tab">Developer</a>
                </div>
                <div className="md:grid items-center mt-4 mb-4 object-cover gap-8  md:grid-cols-3">
                    <div className="card bg-base-100  shadow-xl">
                    <Image src={profile} alt='image'/>
                        <div className="card-body">
                            <h2 className="card-title">
                            OmniFood - Never Cook Again!
                            </h2>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaArrowLeftLong />Github</p>
                                <p className='flex gap-2 items-center'>View Site<FaArrowRightLong /></p>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                    <Image src={profile2} alt='image'/>
                        <div className="card-body">
                            <h2 className="card-title">
                            Nexter - Ultimate Personal Freedom
                            </h2>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaArrowLeftLong />Github</p>
                                <p className='flex gap-2 items-center'>View Site<FaArrowRightLong /></p>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                    <Image className='image-full' src={profile3} alt='image'/>
                        <div className="card-body">
                            <h2 className="card-title">
                            Natorus - Exciting tours for adventure
                            </h2>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaArrowLeftLong />Github</p>
                                <p className='flex gap-2 items-center'>View Site<FaArrowRightLong /></p>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  shadow-xl">
                    <Image src={profile6} alt='image' />
                        <div className="card-body">
                            <h2 className="card-title">
                            Agency
                            </h2>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaArrowLeftLong />Github</p>
                                <p className='flex gap-2 items-center'>View Site<FaArrowRightLong /></p>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                    <Image src={profile5} alt='image'/>
                        <div className="card-body">
                            <h2 className="card-title">
                            Web Desing
                            </h2>
                            <div className='flex justify-between'>
                                <p className='flex items-center gap-2'><FaArrowLeftLong />Github</p>
                                <p className='flex gap-2 items-center'>View Site<FaArrowRightLong /></p>
                            </div>
                            <div className="card-actions justify-between">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Porfolio;