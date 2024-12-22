import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { category } from "../data/api";
import List from "./List";



const Categories = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(category);
      setData(response.data.categories);
    } catch (err) {

    }

  }





  useEffect(() => {
    getData();

  }, []);



  return (
    <div className="p-4">

      {data && <List data={data} />}

    </div>
  )
}
export default Categories





///categories-listCard-list-backCard///////////////


























// import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { category } from '../data/api';
// import { useNavigate } from 'react-router-dom';


// const Categories = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [visibleItems, setVisibleItems] = useState(4);
//   const nav = useNavigate();
//   const getData = async () => {
//     setIsLoading(true);
//     try {
//       const res = await axios.get(category);
//       setData(res.data.categories);
//     } catch (error) {
//       setError('Failed to fetch data');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleShowMore = () => {
//     setVisibleItems();
//   };

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error) {
//     return <h1>{error}</h1>;
//   }

//   return (
//     <div>
//       <Card className="w-full bg-green-50 mb-20">
//         <CardBody>
//           <div className="mb-4 items-center">
//             <Typography className="text-amber-800 text-center text-[40px]">
//               Categories
//             </Typography>
//           </div>
//           <div className="gray-200 grid grid-cols-7 items-center gap-4" onClick={() => nav('/item/${i}')}  >
//             {data.slice(0, visibleItems).map(({ idCategory, strCategory, strCategoryThumb }) => (
//               <CategoryItem
//                 key={idCategory}
//                 strCategory={strCategory}
//                 strCategoryThumb={strCategoryThumb}
//               />
//             ))}
//           </div>

//           {visibleItems < data.length && ( ///not needs to write this also ok
//             <div className="flex justify-center mt-4">
//               <Button onClick={handleShowMore} className="bg-blue-500 text-white">
//                 Show More
//               </Button>
//             </div>
//           )}
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// const CategoryItem = ({ strCategory, strCategoryThumb }) => (
//   <div className="pb-3 pt-3 border-2 border-deep-orange-50 grid items-center text-center rounded-2xl " >
//     <div className="gap-x-3">
//       <img size="lg" src={strCategoryThumb} alt={strCategory} />
//       <div>
//         <Typography color="blue-gray" variant="h6">
//           {strCategory}
//         </Typography>
//       </div>
//     </div>
//   </div>
// );

// export default Categories;






