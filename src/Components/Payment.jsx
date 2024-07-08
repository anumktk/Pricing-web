import React from "react";
import PayImage from "../Assets/PayImage.png";
import CheckImage from "../Assets/CheckImage.png";
import shoppingcart from "../Assets/shoppingcart_.png";
import CommentDollar from "../Assets/CommentDollar.png";
import freeCodeCamp from "../Assets/freeCodeCamp.png";
import ShareImage from "../Assets/ShareImage.png";

const Payment = () => {
  return (
    <div className="Payment_backgroud_1">
      <div className="Payment_background">
        <div className="relative"></div>
        <div className="left_semi-circle_pay absolute"></div>
        <div className="upward_semi-circle_pay absolute"></div>
        <div className="flex flex-col justify-center items-center ">
          <img src={PayImage} alt="PayImage" className="PaymentImage" />
          <h1 className="text-white text-4xl mr-24 mt-5 poppins">
            Premium PRO
          </h1>
          <h1 className="text-white mr-24 text-4xl mt-2 poppins">$329</h1>
          <h5 className="text-white mr-24">billed just once</h5>
        </div>
      </div>
      {/* card */}
      <div className="flex justify-center items-center mt-9 ">
        <div className="bg-white rounded-xl flex-col px-6 py-12  border-solid border-4 ">
          <h1 className="poppins-medium">
            Access these features when you <br /> get this pricing package for
            your <br />
            business.
          </h1>
          <ul className="mt-6">
            <li className="flex items-center">
              <img
                src={CheckImage}
                alt="CheckImage"
                className="mr-2"
                style={{ width: "17.39px", height: "12.97px" }}
              />
              International calling and messaging API
            </li>

            <li className="flex items-center">
              <img
                src={CheckImage}
                alt="CheckImage"
                className="mr-2"
                style={{ width: "17.39px", height: "12.97px" }}
              />
              Additional phone numbers
            </li>

            <li className="flex items-center">
              <img
                src={CheckImage}
                alt="CheckImage"
                className="mr-2"
                style={{ width: "17.39px", height: "12.97px" }}
              />
              Automated messages via zapier
            </li>

            <li className="flex items-center">
              <img
                src={CheckImage}
                alt="CheckImage"
                className="mr-2"
                style={{ width: "17.39px", height: "12.97px" }}
              />
              24/7 support and consulting
            </li>
          </ul>
          <div className="flex items-center mt-6">
            <button
              className="bg-cyan-400 hover:bg-cyan-800"
              style={{
                backgroundImage: `url(${shoppingcart})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "54px",
                height: "45px",
              }}
            ></button>

            {/* <button className=" bg-cyan-400" style={shoppingcart}></button> */}
            <button
              className=" text-white bg-cyan-400 hover:scale-y-110 hover:bg-cyan-800 ml-2 "
              style={{ width: "221px", height: "45px" }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* footer  */}
      <ul className="grid grid-cols-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-gap-4 ml-20 mr-10 gap-0 justify-center items-center mt-9 ">
        <li className="mr-12 flex items-center">
          <img src={CommentDollar} alt="CommentDollar" />
          <span>30 days money back Guarantree</span>
        </li>
        <li className="mr-12 flex items-center">
          <img src={freeCodeCamp} alt="freeCodeCamp" />
          <span>No setup fees 100% hassle-free</span>
        </li>
        <li className="mr-12 flex items-center">
          <img src={ShareImage} alt="ShareImage" />
          <span>
            No monthly subscription Pay <br /> once and for all
          </span>
        </li>
      </ul>

      {/* <ul className="flex justify-center items-center mt-9 ">
        <li className="mr-12 flex items-center">
          <img src={CommentDollar} alt="CommentDollar" />
          30 days money back Guarantree
        </li>
        <li className="mr-12 flex items-center">
          <img src={freeCodeCamp} alt="freeCodeCamp" />
          No setup fees 100% hassle-free
        </li>
        <li className="mr-12 flex items-center">
          <img src={ShareImage} alt="ShareImage" />
          No monthly subscription Pay <br /> once and for all
        </li>
      </ul> */}
    </div>
  );
};

export default Payment;

// {/* <div className="border rounded-md relative px-2 py-12 border-solid border-4 border-blue-400">
//           <p className="mt-2 ">
//             Access these features when you <br /> get this pricing package for
//             your <br />
//             business.
//           </p>
//           <button className=" text-white bg-blue-400 px-8 py-4 mt-6 hover:scale-y-110 hover:bg-blue-800">
//             Buy Now
//           </button>
//         </div> */}
