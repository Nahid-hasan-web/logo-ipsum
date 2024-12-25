import React, { useState } from "react";

const Banner = () => {
    const [rotateDeg, setRotateDeg] = useState("rotate-[57deg]");
    const [roateColors ,setRotateColors] = useState({rotateBannerBg: 'bg-[#FFF7CF]' , rotateCardBg:'bg-[#F5DE6E]'})
  return (
    <>
      <div className={`banner pt-[319px]  transition-all duration-[1s] ${roateColors.rotateBannerBg} overflow-hidden h-screen`}>
        <div className="container">
          <div className="bannerrow relative flex justify-between">
            <div className="banner_text_buttons">
              <h1 className="w-[605px] text-[80px]  font-bricolage text-balance font-semibold">
                Sip Your Way to Bliss Taste
              </h1>
              <p className="w-[605px] text-[26px] font-abeezee text-balance font-semibold">
                We're dedicated to bringing you deliciously fresh smoothies,
                made with love, care, and the finest ingredients.
              </p>
              <div className="flex gap-5 mt-5 text-2xl font-bold ">
                <button
                                  onClick={() => { setRotateDeg("rotate-[57deg]"), setRotateColors((prev) => ({...prev ,rotateBannerBg: 'bg-[#FFF7CF]' , rotateCardBg:'bg-[#F5DE6E]'}))}}
                  className=" active:scale-[1.1] w-[100px] h-[100px] overflow-hidden"
                >
                  {" "}
                  <img
                    className="w-full"
                    src="images/Banana.png"
                    alt="banana"
                  />
                </button>
                <button
                  onClick={() => {setRotateDeg("rotate-[231deg]") , setRotateColors((prev)=>({...prev , rotateBannerBg:'bg-[#FFCBEA]' ,   rotateCardBg:'bg-[#C976A7]'}))}}
                  className=" active:scale-[1.1] w-[100px] h-[100px] overflow-hidden"
                >
                  {" "}
                  <img
                    className="w-full"
                    src="images/Bluberry.png"
                    alt="banana"
                  />
                </button>
                <button
                  onClick={() =>{ setRotateDeg("rotate-[320deg]") , setRotateColors((prev)=>({...prev , rotateBannerBg:'bg-[#ECFFCC]' ,   rotateCardBg:'bg-[#8FB351]'}))}}
                  className=" active:scale-[1.1] w-[100px] h-[100px] overflow-hidden"
                >
                  {" "}
                  <img className="w-full" src="images/Kiwi.png" alt="banana" />
                </button>
              </div>
            </div>
            <div
              className={`banner_images absolute top-[100px] right-[-650px] ${roateColors.rotateCardBg} ${rotateDeg} transition-all duration-[1s]  m-auto w-[1400px] h-[1400px] rounded-full `}
            >
              <div className="SingelImage rotate-[270deg] absolute top-[50%]  translate-y-[-50%] translate-x-[50%] left-[-40%] w-[500px] h-[400px]  ">
                <img className="w-full" src="images/Banana.png" alt="banana" />
              </div>
              <div className="SingelImage rotate-[90deg] absolute left-[1187px]   top-[460px] w-[500px] h-[400px]  ">
                <img
                  className="w-full"
                  src="images/Bluberry.png"
                  alt="banana"
                />
              </div>
              <div className="SingelImage absolute  top-[-266px] right-[373px] w-[500px] h-[400px]  ">
                <img className="w-full" src="images/Kiwi.png" alt="banana" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
