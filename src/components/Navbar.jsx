
'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
 
 const Navbar = () => {
    const pathname = usePathname();
        const navlinks = [
            {
                title : "Home",
                pathName:"#home"
            },
            {
                title : "About",
                pathName:"#about"
            },
            {
                title : "Skill",
                pathName:"#skill"
            }

        ]
    return (
        <div className='flex  justify-between border-b-2 p-6'>
            <h2 className='font-bold text-xl text-black'><Link href='/'>Logo <span className='text-red-500'>Rakib</span></Link></h2>
            <ul className='flex gap-5 items-center p-x-8'>
                {navlinks.map((link)=> <Link className={`${pathname === link.pathName && 'text-orange-500'}`} key={link.pathName} href={link.pathName}>{link.title}</Link>)}
                
            </ul>
        </div>
    );
 };
 
 export default Navbar;