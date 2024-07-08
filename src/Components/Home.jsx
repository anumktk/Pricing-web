import React from "react";
import mainImage from "../Assets/mainImage.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/payment"); // Navigate to the payment screen
  };
  return (
    <div className="background">
      <div className="relative">
        <div className="left_semi-circle absolute"></div>
        <div className="upward_semi-circle absolute"></div>
      </div>

      <div className="flex flex-col justify-center items-center ">
        <img
          src={mainImage}
          alt="mainImage"
          className="mainImage"
          // style={{ width: "402px", height: "303px", marginTop: "126px" }}
        />
        <h1 className="text-4xl mt-8 poppins">
          Simple pricing for {"\n"} your business
        </h1>
        <p className="text-xl mt-2 font_plans">
          Plans that are carefully crafted to suit your {"\n"} business.
        </p>

        <button
          className="bg-cyan-500 text-white mt-8 px-16 py-2 Poppins sm:p4-4  "
          onClick={handleClick} // Handle button click to navigate
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
