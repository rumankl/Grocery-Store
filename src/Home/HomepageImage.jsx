import React, { useEffect, useState } from 'react';
import { slides } from '../data/ImageUrl';

const HomepageImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change slide every 4 seconds
    console.log('Slide interval started');
    return () => {
      clearInterval(interval); // Cleanup interval on component unmount
      console.log('Slide clear');
    };
  }, []);

  console.log('interval')
  const prevSlide = () => {
    // setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    // setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //goToSlide yeley chai . button ma click garda dipaly hunxa
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-full md:max-w-[1400px] h-auto md:h-[620px] w-full mx-auto py-2 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[620px] rounded-2xl bg-center bg-cover duration-1000'
      ></div>
      {/* Text overlay in images */}
      <div className='absolute rounded-2xl w-full max-w-[95%] md:max-w-[85%] top-[50%] transform -translate-y-1/2 bg-black/50 text-white p-4 md:p-8 text-center'>
        {slides[currentIndex].text}
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <button onClick={prevSlide} size={30}>‹</button>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <button onClick={nextSlide} size={30}>›</button>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-blue-500' : 'text-gray-500'}`}
          >
            • {/*alt + 0149• */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageImage;






// //import React from 'react';

// const ase = [
//   { key: 'abc', value: 'someValue' },
//   { key: 'bcs', value: 'anotherValue' }
// ];

// function KeyValueList() {
//   return (
//     <div>
//       <div>
//         <p>Key: {ase[0].key}, Value: {ase[0].value}</p>
//       </div>
//       <div>
//         <p>Key: {ase[1].key}, Value: {ase[1].value}</p>
//       </div>
//       {/* Add more divs for additional items if needed */}
//     </div>
//   );
// }

// export default KeyValueList;
