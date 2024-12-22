import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

import { getItems } from "../data/api";
import BackCard from "./BackCard";


const ListCard = () => {

  const { category } = useParams();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(getItems, {
        params: {
          c: category
        }
      });
      setData(response.data);
    } catch (err) {

    }

  }





  useEffect(() => {
    getData();

  }, []);


  console.log(data);



  return (
    <div className="p-4 grid grid-cols-4 gap-2">



      {data && data.meals.map((meal) => {
        return <BackCard key={meal.idMeal} meal={meal} />;
      })}






    </div>
  )
}
export default ListCard