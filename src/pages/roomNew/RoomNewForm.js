// import React/Hook/Router...
import React from "react";
import { Form } from "react-router-dom";

// function Component
const RoomNewForm = function (props) {
  // lấy dữ liệu từ props
  const hotels = props.hotels;

  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "2 bed room",
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      placeholder: "King size bed, 1 bath room",
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "100",
    },
    {
      label: "Max People",
      name: "maxPeople",
      type: "number",
      placeholder: "2",
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
          placeholder={info.placeholder}
          className={classStyle}
        />
      </div>
    );
  });

  // tạo html cho các input khác
  const inputOther = (title, name, width, input) => (
    <div key={name} style={{ width }}>
      <label htmlFor={name} className="fw-bold fs-5 opacity-90">
        {title}
      </label>
      {input}
    </div>
  );

  // render option chọn Hotel để thêm Rooms
  const optionHotels = hotels.map((item) => {
    return (
      <option key={item._id} value={item._id}>
        {item.name}
      </option>
    );
  });

  // return
  return (
    <Form method="post" action="/room-new">
      {/* 4 input đầu render bằng list map */}
      <div className="d-flex flex-wrap justify-content-between mb-2">
        {inputList}
      </div>

      <div className="d-flex flex-wrap justify-content-between">
        {/* input Rooms */}
        {inputOther(
          "Rooms",
          "roomNumbers",
          "20%",
          <textarea
            id="roomNumbers"
            name="roomNumbers"
            // accepted
            required
            rows="2"
            className="d-block w-100 p-1"
            placeholder="give comma between room numbers"
          />
        )}

        {/* input Choose a hotel */}
        {inputOther(
          "Choose a hotel",
          "hotelID",
          "25%",
          <select
            id="hotelID"
            name="hotelID"
            required
            className="d-block w-100 p-1"
          >
            <option value="">Choose hotel to add room</option>
            {optionHotels}
          </select>
        )}

        {/* SEND button */}
        <button
          type="submit"
          className="btn btn-success rounded-0 fw-bold p-4 align-self-end"
          style={{ width: "15%" }}
        >
          Send
        </button>
      </div>
    </Form>
  );
};

export default RoomNewForm;
