import React, { useEffect, useState } from 'react';
import 'animate.css';
import { useInView } from 'react-intersection-observer';

const AnimationComponentRight = ({image, alt, description, url}) => {

    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.6,
    });

    useEffect(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, [inView]);

  return (
    <div ref={ref} className={`p-2 flex max-w-xd mx-auto rounded-xl justify-center mr-2 ml-2
    ${
      isVisible
          ? 'animate__animated animate__fadeInRight'
          : 'opacity-0'
    }`}>
        <div className='grid grid-cols-1 gap-6'>
            <div className='bg-gray-800 p-2 rounded-xl flex shadow-md shadow-gray-600'>
                <a href={ url } target="_blank">
                    <img className="lg:w-full w-72 rounded-xl" 
                    src={ image } 
                    alt={ alt } />
                </a>
                <span className='flex justify-center items-center m-2 md:m-5 text-gray-200 font-medium text-sm md:text-lg'>{ description }</span>
            </div>
        </div>
    </div>
  );
};

export default AnimationComponentRight;
