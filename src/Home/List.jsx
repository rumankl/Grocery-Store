import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Card, CardBody, Typography, Button } from '@material-tailwind/react';

const List = ({ data }) => {
  const nav = useNavigate();
  const [visibleItems, setVisibleItems] = useState(4);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Update to show 4 more items
  };

  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 gap-4"> {/* Add grid layout with 4 columns */}
        {data.slice(0, visibleItems).map(({ strCategory, strCategoryThumb, strCategoryDescription }, index) => (
          <Card key={index} className="w-full">
            <CardBody>
              <div onClick={() => nav(`/item/${strCategory}`)} className="flex flex-col items-center">
                <Avatar size="lg" src={strCategoryThumb} alt={strCategoryThumb} />
                <div className="mt-4 text-center">
                  <Typography color="blue-gray" variant="h6">
                    {strCategory}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {strCategoryDescription.substring(0, 100) + '....'}
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      {visibleItems < data.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={handleShowMore} className="bg-blue-500 text-white">
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default List;
