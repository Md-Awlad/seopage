import React from "react";

import CardDetails from "../components/cardDetails";

const LandingPage = () => {
  const [clientData, setClientData] = React.useState([]);

  // <-- Fetching Data -->
  React.useEffect(() => {
    fetch("Data.json")
      .then((res) => res.json())
      .then((data) => setClientData(data));
  }, []);

  return (
    <div className="bg-white mx-10 my-20 px-4 py-2 rounded-md">
      <div className="overflow-x-scroll flex w-[2200px] gap-7 ">
        {[1, 2, 3, 4, 5, 6]?.map((data) => (
          <div className="w-[350px] h-[400px] overflow-y-scroll bg-gray-200 space-y-3 p-2 rounded-md ">
            {/* <-- Header --> */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className=" w-4 h-4 flex justify-center items-center rounded-l-full bg-rose-800"></div>
                <h2>Incomplete</h2>
              </div>
              <div className=" w-6 h-6 flex justify-center items-center rounded-lg bg-gray-300">
                <h1>0</h1>
              </div>
            </div>
            {/* <-- Details --> */}
            {clientData.map((data, index) => (
              <CardDetails data={data} key={index} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
