import React from 'react';



const SectionTitle = ({ subheading, heading }) => {
    return (
        <div> 
            <div className='mb-10 text-center p-4 mt-10'>
                <h2 className="text-3xl ">{heading}</h2>
                <p className='text-center text-gray-600  p-2'>---{subheading}---</p>
            </div>
        </div>
    );
};

export default SectionTitle;