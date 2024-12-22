

import Categories from '../Home/Categories';
import FeedBack from '../Home/FeedBack';
// import Popup from '../Home/Popup';



const HomePage = () => {

  return (
    <div  >
      <div className='grid grid-cols-5  p-10 min-h-[575px] '>

        <div className='  col-span-3  space-y-8 place-content-center  '>
          <p className='bg-gray-200 w-60 p-2 rounded-full '>The Best Online Grocery Store</p>
          <h1 className='text-6xl '>Your One-Stop Shop <br /> for Quality Groceries</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id!</p>
        </div>

        <div className='grid col-span-2 place-content-center '>
          <img
            className="h-96 w-96 rounded-full ring-[5px]  ring-green-400 ring-offset-4 object-cover object-center "
            src="https://www.theswag.com.au/cdn/shop/articles/Depositphotos_74132189_m-2015_f07ba148-e866-42c1-af07-f23fe601e158.jpg?v=1605153919"
            alt="nature image"
          />

        </div>
      </div>
      <Categories />
      <FeedBack />
      {/* <Popup /> */}

    </div>
  );
};

export default HomePage;
