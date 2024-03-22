import React from "react";
import HomeCard from "./HomeCard";
import { useSelector } from "react-redux";

const Home = () => {

  const productData = useSelector(state => state.product);
  // console.log(productData);

  // const homeProductCardList = productData.productList.map((item) => {
  //   return <HomeCard
  //     key={item._id}
  //     name={item.name}
  //     price={item.price}
  //     description={item.description}
  //     image={item.image}
  //     category={item.category}
  //   />
  // })

  return (
    <div className="p-2 md:p-4 h-screen overflow-auto">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-400 px-2 items-center rounded-full w-40 mb-3">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img className="h-10" src="https://cdn-icons-png.flaticon.com/512/3198/3198336.png" alt="bike" />
          </div>
          <h2 className=" text-4xl md:text-7xl font-bold">The Fastest Delivery near <span className=" text-green-600">Your Home</span></h2>
          <p className="py-3 text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit urna, sagittis ac lectus id, pulvinar pretium magna. Cras rutrum odio a velit porta, vitae ornare magna pellentesque. Donec ac metus leo. Curabitur non risus et est congue fringilla et eget risus. In rhoncus interdum luctus. Nunc vel varius felis.</p>
          <button className=" font-bold bg-green-400 px-4 py-2 rounded-md">Order Now</button>
        </div>

        <div className="md:w-1/2 overflow-auto flex flex-wrap gap-5 p-4 justify-center">
          {productData.productList.slice(3).map((item) => {
            return <HomeCard
              key={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              category={item.category}
            />
          }
          )}
        </div>
      </div>
      <div className="">
        <h3 className="font-bold text-2xl text-slate-800">Fresh Vegetables</h3>
        <div>

        </div>
      </div>
    </div>
  )
};

export default Home;
