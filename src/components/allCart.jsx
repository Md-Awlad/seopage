import React from "react";
import CartDetails from "./cartDetails";

const AllCart = () => {
  const [clientData, setClientData] = React.useState([]);

  // <-- Fetching Data -->
  React.useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setClientData(data));
  }, []);

  return (
    <>
      <div className="flex gap-3 overflow-auto py-10">
        {/* <-- Incomplete --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-rose-600"></div>
                <h2>INCOMPLETE</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 13874983787656 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
        {/* <-- TODO --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-cyan-500"></div>
                <h2>TODO</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 13874922483 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
        {/* <-- Doing --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-yellow-300"></div>
                <h2>DOING</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 1387499983 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
        {/* <-- Review --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-yellow-600"></div>
                <h2>UNDER REVIEW</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 13889774983 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
        {/* <-- Complete --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-green-500"></div>
                <h2>COMPLETE</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 1354674983 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
        {/* <-- Overd --> */}
        <div className="w-[350px] flex-shrink-0 whitespace-normal h-[400px] overflow-y-scroll bg-gray-100 px-2 rounded-md">
          <div className="space-y-3">
            <div className="flex justify-between items-center sticky top-0 bg-gray-100 py-2">
              <div className="flex items-center gap-1">
                <div className=" w-6 h-6 flex justify-center items-center rounded-l-full bg-green-500"></div>
                <h2>OVERD</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => {
              let data2 = { ...data, id: data.id + 13874983 };
              return <CartDetails data={data2} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCart;
