// import React/Hook/Router...
import React from "react";
import { Form } from "react-router-dom";

// function Component
const HotelEditForm = function (props) {
  // lấy dữ liệu từ props
  const hotel = props.hotel;

  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      label: "Name",
      name: "name",
      type: "text",
      defaultValue: hotel.name,
    },
    {
      label: "Type",
      name: "type",
      type: "text",
      defaultValue: hotel.type,
    },
    {
      label: "City",
      name: "city",
      type: "text",
      defaultValue: hotel.city,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      defaultValue: hotel.address,
    },
    {
      label: "Distance from City Center",
      name: "distance",
      type: "number",
      defaultValue: hotel.distance,
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      defaultValue: hotel.title,
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      defaultValue: hotel.desc,
    },
    {
      label: "Price",
      name: "cheapestPrice",
      type: "number",
      defaultValue: hotel.cheapestPrice,
    },
  ];

  // tạo html cho các input từ mảng thông tin input
  const inputList = inputInfoList.map((info) => {
    // class style cho input
    const classStyle = "border-0 border-bottom border-3 w-100 p-1";

    // return render
    return (
      <div key={info.name} className="mb-4" style={{ width: "40%" }}>
        <label htmlFor={info.name} className="fw-bold fs-5 opacity-90">
          {info.label}
        </label>
        <input
          type={info.type}
          id={info.name}
          name={info.name}
          required
          defaultValue={info.defaultValue}
          className={classStyle}
        />
      </div>
    );
  });

  // tạo html cho các input khác
  const inputOther = (title, name, width, input) => (
    <div key={name} className="mb-4" style={{ width }}>
      <label htmlFor={name} className="fw-bold fs-5 opacity-90">
        {title}
      </label>
      {input}
    </div>
  );

  // return
  return (
    <Form method="post" action="/hotel-edit/:hotelID">
      {/* 8 input đầu render bằng list map */}
      <div className="d-flex flex-wrap justify-content-between mb-2">
        {inputList}
      </div>

      <div className="d-flex flex-wrap justify-content-between mb-2">
        {/* input Images */}
        {inputOther(
          "Images",
          "photos",
          "40%",
          <textarea
            id="photos"
            name="photos"
            required
            rows="2"
            className="d-block w-100 p-1"
            defaultValue={hotel.photos}
          />
        )}

        {/* input Featured */}
        {inputOther(
          "Featured",
          "featured",
          "40%",
          <select
            id="featured"
            name="featured"
            required
            className="d-block p-1"
            defaultValue={hotel.featured}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        )}
      </div>

      {/* input Rooms */}
      {inputOther(
        "Rooms",
        "rooms",
        "100%",
        <select id="rooms" multiple size="5" className="d-block w-100 p-2">
          <option>2 Bed Room</option>
          <option>1 Bed Room</option>
          <option>Basement Double Room</option>
          <option>Superior basement room</option>
          <option>Deluxe Room</option>
          <option>Deluxe Window</option>
          <option>Premier City View Room</option>
          <option>Budget Double Room</option>
          <option>Budget Twin Room</option>
        </select>
      )}

      {/* input hidden */}
      <input type="hidden" name="hotelID" value={hotel._id} />

      {/* SEND button */}
      <button
        type="submit"
        className="btn btn-success rounded-0 fw-bold p-2 mt-3"
        style={{ width: "20%" }}
      >
        Send
      </button>
    </Form>
  );
};

export default HotelEditForm;
