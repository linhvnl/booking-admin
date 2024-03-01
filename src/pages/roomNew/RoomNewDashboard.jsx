// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// dùng HELPER function
import handleActionForm from "../../hooks/handleActionForm";

// import component
import RoomNewForm from "./RoomNewForm";

// function Component
const RoomNewDashboard = function (props) {
  // data trả về từ Server
  const hotels = useLoaderData();

  // return
  return (
    <>
      <div className="shadow p-3 opacity-50 mb-4">
        <h3 className="fw-bold mb-0">Add New Room</h3>
      </div>

      {/* form add new room */}
      <div className="shadow px-5 py-3">
        <RoomNewForm hotels={hotels} />
      </div>
    </>
  );
};

export default RoomNewDashboard;

///////////////////////////
// LOADER
// hàm loader để lấy dữ liệu hiển thị Dashboard từ API
export async function loader({ request, params }) {
  // fetch dữ liệu
  return fetch(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/hotels-name`
  );
}

/////////////////////////////
// ACTION
// hàm action để gửi dữ liệu SUBMIT NEW ROOM đến Server
export async function action({ request, params }) {
  // lấy dữ liệu form
  const formData = Object.fromEntries(await request.formData());

  return handleActionForm(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/room-add`,
    formData,
    "/rooms"
  );
}
