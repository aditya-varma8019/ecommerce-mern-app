import React from "react";
import { LuUpload } from "react-icons/lu";
import ImageToBase64 from "../utilities/ImageToBase64";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const NewProduct = () => {

  const navigate = useNavigate();

  const [data, setData] = React.useState({
    name: "",
    category: "Fruits",
    image: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const uploadImage = async (e) => {
    const image = await ImageToBase64(e.target.files[0]);
    setData({...data, image: image});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name, category, image, price, description} = data;

    if(name && category && image && price && description) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/newproduct`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data),
        })
        
        const dataRes = await response.json();

        toast(dataRes.message)
        if(dataRes.alert) {
          setData({
            name: "",
            category: "Fruits",
            image: "",
            price: "",
            description: ""
          });
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }

        // Reset data state to empty
        
    }
    else {
      toast("All Fields Are Necessary!")
    }
    
  }

  return (
    <div className="p-4 ">
      <form className="m-auto rounded w-full max-w-md flex flex-col shadow p-3 bg-white" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center">New Product</h1>
        <label htmlFor="name">Name</label>
        <input type="text" value={data.name} onChange={handleChange} name="name" className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-300" />

        <label htmlFor="category">Category</label>
        <select className="bg-slate-300 rounded mt-2 mb-3 h-8" id="category" name="category" value={data.category} onChange={handleChange}  >
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>IceCream</option>
          <option>Snacks</option>
        </select>

        <label htmlFor="image">Image
          <div className="h-40 mt-2 mb-3 rounded w-full flex justify-center items-center bg-slate-300 cursor-pointer">
            
            <input type="file"  accept="image/*" name="image" id="image" className="hidden" onChange={uploadImage} />
            {data.image ? <img src={data.image} alt="product" className="h-full" /> : <span className="text-5xl cursor-pointer text-center"><LuUpload /></span>}
          </div>
        </label>

        <label htmlFor="price">Price</label>
        <input type="number" name="price" onChange={handleChange} value={data.price}  className=" mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-300" />

        <label htmlFor="description">Description</label>
        <textarea rows={3} onChange={handleChange} value={data.description} name="description" className=" resize-none mt-2 mb-3 w-full border-2 border-gray-300 bg-slate-300 p-2 rounded-lg focus:outline-none focus:border-green-300" />

        <button type="submit" className="w-full mt-4 text-2xl bg-green-400 text-white p-2 rounded-lg hover:bg-green-500">Save</button>
      </form>
    </div>
  );
};

export default NewProduct;
