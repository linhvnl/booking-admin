// import React/Hook/Router...
import React from "react";

// dùng HELPER function
import handleActionForm from "../../hooks/handleActionForm";

// import component
import HotelNewForm from "./HotelNewForm";

// function Component
const HotelNewDashboard = function (props) {
  // return
  return (
    <>
      <div className="shadow p-3 opacity-50 mb-4">
        <h3 className="fw-bold mb-0">Add New Hotel</h3>
      </div>

      {/* form add new hotel */}
      <div className="shadow px-5 py-3">
        <HotelNewForm />
      </div>
    </>
  );
};

export default HotelNewDashboard;

/////////////////////////////
// ACTION
// hàm action để gửi dữ liệu SUBMIT NEW HOTEL đến Server
export async function action({ request, params }) {
  // lấy dữ liệu form
  const formData = Object.fromEntries(await request.formData());

  return handleActionForm(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/admin/hotel-add`,
    formData,
    "/hotels"
  );
}
