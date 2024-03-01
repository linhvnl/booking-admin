// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// dùng HELPER function
import handleActionForm from "../../hooks/handleActionForm";

// import component
import RoomEditForm from "./RoomEditForm";

// function Component
const RoomEdit = function (props) {
  // data trả về từ Server
  const { belongHotel, room } = useLoaderData();

  // return
  return (
    <>
      <div className="shadow p-3 opacity-50 mb-4">
        <h3 className="fw-bold mb-0">Edit Room</h3>
      </div>

      {/* form Edit room */}
      <div className="shadow px-5 py-3">
        <RoomEditForm room={room} belongHotel={belongHotel} />
      </div>
    </>
  );
};

export default RoomEdit;

///////////////////////////
// LOADER
// hàm loader để lấy dữ liệu từ API
export async function loader({ request, params }) {
  // lấy params động từ url để fetch hotel cần edit
  const roomID = params.roomID;

  // tạo url động
  const urlFetch = `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/room/${roomID}`;

  // fetch dữ liệu
  return fetch(urlFetch);
}

/////////////////////////////
// ACTION
// hàm action để gửi dữ liệu SUBMIT EDIT ROOM đến Server
export async function action({ request, params }) {
  // lấy dữ liệu form
  const formData = Object.fromEntries(await request.formData());

  return handleActionForm(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/room-edit`,
    formData,
    "/rooms"
  );
}
