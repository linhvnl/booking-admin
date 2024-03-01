// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// dùng HELPER function
import handleActionForm from "../../hooks/handleActionForm";

// import component
import HotelEditForm from "./HotelEditForm";

// function Component
const HotelEdit = function (props) {
  // data trả về từ Server
  const hotel = useLoaderData();

  // return
  return (
    <>
      <div className="shadow p-3 opacity-50 mb-4">
        <h3 className="fw-bold mb-0">Edit Hotel</h3>
      </div>

      {/* form add Edit hotel */}
      <div className="shadow px-5 py-3">
        <HotelEditForm hotel={hotel} />
      </div>
    </>
  );
};

export default HotelEdit;

/////////////////////////////
// LOADER
// hàm loader để lấy dữ liệu từ API
export async function loader({ request, params }) {
  // lấy params động từ url để fetch hotel cần edit
  const hotelID = params.hotelID;

  // tạo url động
  const urlFetch = `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/hotel/${hotelID}`;

  // fetch dữ liệu
  return fetch(urlFetch);
}

/////////////////////////////
// ACTION
// hàm action để gửi dữ liệu SUBMIT EDIT HOTEL đến Server
export async function action({ request, params }) {
  // lấy dữ liệu form
  const formData = Object.fromEntries(await request.formData());

  return handleActionForm(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/hotel-edit`,
    formData,
    "/hotels"
  );
}
