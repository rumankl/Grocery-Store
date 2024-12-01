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
    <div className="text-center">
      <h1 className="text-3xl text-orange-400">Our Feedback List</h1>
      <p>What our honorable customers say!</p>
      <div className="relative mt-6 ">
        <button onClick={handlePrev} className="absolute left-60 z-10 top-[35%] bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded sm:left-20">
          Prev
        </button>
        <div className="flex scroll-smooth scrollbar-hide w-full px-10 justify-center mb-10">
          {fslide.slice(currentIndex, currentIndex + 2).map((feedback, index) => (
            <Card key={index} className="w-80 mx-2 flex-shrink-0">
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
          ))}
        </div>
        <button onClick={handleNext} className="absolute right-60 z-10 top-[35%] bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded sm:right-20">
          Next
        </button>
      </div>
    </div>
  );
};

export default Feedback;
