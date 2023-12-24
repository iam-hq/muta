import Container from "../Components/Container";
import Img1 from "../Assets/img1.png";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

export default function Events() {
  const [currentState, setCurrentState] = useState("past");
  return (
    <>
      <div className="relative">
        <div
          className="absolute p-4 sm:p-6 px-6 sm:px-10 rounded-tr-lg rounded-br-3xl top-1/2 -translate-y-1/2"
          style={{
            background: "rgba(255,255,255,0.5)",
          }}
        >
          <div className="text-4xl font-bold">
            A visit to the parliament to visit Muslim Legislators
          </div>
          <div className="text-xl">23rd September 2021, Lilongwe</div>
        </div>
        <img className="w-full h-[80vh] object-cover" src={Img1} alt="" />
      </div>

      <Container
        transparent={true}
        ypadding="mt-10"
        className="grid grid-cols-2"
      >
        <button
          onClick={() => setCurrentState("past")}
          className={`border-b-4 text-center p-3 ${
            currentState === "past"
              ? "border-blue-700 text-blue-700"
              : "border-gray-500 text-gray-500 hover:text-gray-700"
          } font-black text-lg md:text-2xl`}
        >
          Past Events
        </button>
        <button
          onClick={() => setCurrentState("upcoming")}
          className={`border-b-4 text-center p-3 ${
            currentState === "upcoming"
              ? "border-blue-700 text-blue-700"
              : "border-gray-500 text-gray-500 hover:text-gray-700"
          } font-black text-lg md:text-2xl`}
        >
          Upcoming Events
        </button>
      </Container>

      {currentState === "past"
        ? [1, 2, 3, 4, 5, 6].map((item, index) => (
            <Container
              key={index}
              ypadding="py-4"
              className="md:flex items-center gap-5 hover:bg-gray-100 hover:shadow-lg"
            >
              <div className="font-bold pb-3 md:pb-0 md:text-2xl">
                6th Nov, 2021
              </div>
              <img
                className="w-52 h-36 object-cover rounded-3xl"
                src={Img1}
                alt=""
              />
              <div className="text-2xl">NEC Meeting at Cape Maclear CDSS</div>
              <button className="ml-auto rounded-full px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white">
                Read More
              </button>
            </Container>
          ))
        : [1, 2, 3].map((item, index) => (
            <Container
              key={index}
              ypadding="py-4"
              className="md:flex items-center gap-5 hover:bg-gray-100 hover:shadow-lg"
            >
              <div className="font-bold pb-3 md:pb-0 md:text-2xl">
                6th Nov, 2021
              </div>
              <img
                className="w-52 h-36 object-cover rounded-3xl"
                src={Img1}
                alt=""
              />
              <div className="text-2xl">NEC Meeting at Cape Maclear CDSS</div>
              <button className="ml-auto rounded-full px-6 py-3 border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-700 hover:text-white">
                Read More
              </button>
            </Container>
          ))}
    </>
  );
}
