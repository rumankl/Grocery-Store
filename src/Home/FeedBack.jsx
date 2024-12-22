import React, { useState } from 'react';
import {
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from '@material-tailwind/react';
import { Rating } from '@material-tailwind/react';
import { fslide } from '../data/ImageUrl';


const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fslide.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fslide.length) % fslide.length);
  };


  return (
    <div className="text-center mt-10 mb-10">
      <h1 className="text-3xl text-orange-400 ">Our Feedback List</h1>
      <p>What our honorable customers say!</p>
      <div className="feedback-wrapper mt-6 ">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-gray-200  hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="feedback-container "
            style={{ transform: `translateX(-${currentIndex * 50}%)` }}
          >
            {fslide.map((feedback, index) => (
              <div key={index} className="feedback-slide">
                <Card className="w-100 mx-20 ">
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt={feedback.name}
                        src="https://docs.material-tailwind.com/img/face-1.jpg"
                        className="w-60 h-15"
                      />
                    </ListItemPrefix>
                    <div>
                      <Typography variant="h6" color="blue-gray">
                        {feedback.name}
                      </Typography>
                      <Typography variant="small" color="gray" className="font-normal">
                        {feedback.describe}
                      </Typography>
                      <div>
                        <Rating value={3} />
                      </div>
                    </div>
                  </ListItem>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
          disabled={currentIndex === fslide.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedback;
