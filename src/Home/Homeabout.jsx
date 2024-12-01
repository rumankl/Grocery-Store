import React from 'react';
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { data } from '../data/About';

const Homeabout = () => {
  return (
    <div className="  max-w-screen-xl mx-auto my-[5rem] px-4 sm:px-6 lg:px-8">
      <div className=" text-center my-8">
        <h1 className='text-orange-400 text-3xl sm:text-4xl lg:text-5xl'>About Us</h1>
        <p className='text-base sm:text-lg lg:text-xl mt-2'>Our commitment to pioneering technology drives us, and our passion for excellence defines us.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-20">
        {data.map((item, index) => (
          <Card key={index} className="w-full max-w-xs lg:max-w-sm text-center p-6 transition-transform duration-200 hover:scale-105 hover:bg-orange-50">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.title}
              </Typography>
              <Typography>
                {item.text}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Homeabout;
