'use client'
import React from 'react';
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import Image from 'next/image';
import hi from '../../public/hihlo.jpg'
import rakib from '../../public/rakib1.jpg'

const Banner = () => {
    return (
        <div id='home' className='flex space-y-10 pt-10 mb-10'>
            <div className='space-y-4 mt-20 w-2/12 '>
                <TbBrandFiverr size={30} />
                <SiUpwork size={30} />
                <IoLogoGithub size={30} />
            </div>
            <div className='w-5/12 space-y-4'>
                <h2 className='text-6xl mt-4 uppercase font-bold'>Rakib h.</h2>
                <div className='w-[50px]  h-[50px]'>
                    <Image  src={hi} />
                </div>
                <h3 className='fone-bold text-black text-2xl'>--------Web Developer</h3>
                <p>I am a creative developer based in Bangladesh, <br />
                    and I am very passionate and dedicated to my <br />
                    work.</p>
                <div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn bg-zinc-400 text-black" onClick={() => document.getElementById('my_modal_5').showModal()}>Say Hello</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Welecome to my Website..</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Done</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div className='w-5/12'>
                <Image src={rakib} />
            </div>
        </div>
    );
};

export default Banner;