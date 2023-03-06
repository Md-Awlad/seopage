import React from "react";
import { DiRedis } from "react-icons/di";
import { FaClipboardList } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { HiLink } from "react-icons/hi";
import { CgCalendarDates } from "react-icons/cg";
import moment from "moment";

const CartDetails = ({ clientData, data, id }) => {
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  // <-- Modal function Code -->
  React.useEffect((id) => {
    const openModalBtn = document.getElementById(`open-modal-btn-${id}`);
    const closeModalBtn = document.getElementById(`close-modal-btn-${id}`);
    const modal = document.getElementById(`modal-${id}`);

    const handleOpenModal = (e) => {
      e.preventDefault();
      modal.style.display = "block";
      openModalBtn.id = `open-modal-btn-${id}`;
    };

    const handleCloseModal = (e) => {
      e.preventDefault();
      modal.style.display = "none";
      openModalBtn.id = `close-modal-btn-${id}`;
    };

    openModalBtn.addEventListener("click", handleOpenModal);
    closeModalBtn.addEventListener("click", handleCloseModal);

    return () => {
      openModalBtn.removeEventListener("click", handleOpenModal);
      closeModalBtn.removeEventListener("click", handleCloseModal);
    };
  }, []);

  // <-- submit -->
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileInput = document.getElementById(`fileName-${id}`);
    const files = Array.from(fileInput.files);
    setSelectedFiles(files.map((file) => file.name));
    const modal = document.getElementById(`modal-${id}`);
    modal.style.display = "none";
  };

  return (
    <>
      <div className="bg-white p-2 rounded-sm space-y-3">
        {/* <-- Client --> */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img
              className=" w-6 h-6 object-cover flex justify-center items-center rounded-full"
              src={data?.image}
              alt=""
            />
            <h2 className="text-sm">Client Name</h2>
          </div>
          <div className="flex items-center gap-1">
            <img
              className=" w-6 h-6 object-cover flex justify-center items-center rounded-full"
              src={data?.image}
              alt=""
            />
            <h2 className="text-sm">{data?.client}</h2>
          </div>
        </div>
        {/* <-- Description-- > */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <DiRedis className=" w-6 h-6 object-cover flex justify-center items-center rounded-full" />
            <h2 className="text-sm">{data?.description.slice(0, 28)}</h2>
          </div>
          <div className="px-2 flex justify-center items-center rounded-lg bg-gray-300">
            <FaClipboardList className="text-gray-500" />
            <h1>1/2</h1>
          </div>
        </div>
        {/* <-- Footer --> */}
        <div className="flex gap-1 justify-between items-center">
          <img
            className=" w-8 h-8 object-cover flex justify-center items-center rounded-full"
            src={data?.image}
            alt=""
          />
          <img
            className=" w-8 h-8 object-cover flex justify-center items-center rounded-full"
            src={data?.image}
            alt=""
          />
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-300">
            <h1 className="tex-sm">12+</h1>
          </div>
          <div className="px-2 flex justify-center items-center rounded-lg ">
            <TbMessages className="text-gray-500 text-lg" />
            <h1>1/2</h1>
          </div>
          <div className="px-2 flex justify-center items-center rounded-lg ">
            <HiLink
              id={`open-modal-btn-${id}`}
              className="text-gray-500 text-lg cursor-pointer"
            />
            <h1>{selectedFiles?.length || 25}</h1>
          </div>
          <div className="px-2 flex justify-center items-center rounded-lg ">
            <CgCalendarDates className="text-gray-500 text-lg" />
            <h2 className="text-sm">{moment().format("L")}</h2>
          </div>
        </div>
      </div>
      <div id={`modal-${id}`} style={{ display: "none" }}>
        <form onSubmit={handleSubmit} className="space-y-2">
          <label className="text-red-800">
            Please Select your Attachment File
          </label>
          <input type="file" id={`fileName-${id}`} multiple />
          <div className="flex justify-end items-center gap-3">
            <button
              type="submit"
              className="w-20 text-center py-1 bg-cyan-600 rounded-lg text-lg text-white"
            >
              Submit
            </button>
            <button
              id={`close-modal-btn-${id}`}
              className="w-20 text-center py-1 bg-red-700 rounded-lg text-lg text-white"
            >
              close
            </button>
          </div>
        </form>
        {selectedFiles.length > 0 && (
          <h2>
            Upload All files:<p> {selectedFiles.join(", ")}</p>
          </h2>
        )}
      </div>
    </>
  );
};

export default CartDetails;
