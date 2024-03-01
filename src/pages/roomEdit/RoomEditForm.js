// import React/Hook/Router...
import React from "react";
import { Form } from "react-router-dom";

// function Component
const RoomEditForm = function (props) {
  // lấy dữ liệu từ props
  const room = props.room;
  const belongHotel = props.belongHotel;

  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      label: "Title",
      name: "title",
      type: "text",
      defaultValue: room.title,
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      defaultValue: room.desc,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      defaultValue: room.price,
    },
    {
      label: "Max People",
      name: "maxPeople",
      type: "number",
      defaultValue: room.maxPeople,
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
    <div key={name} style={{ width }}>
      <label htmlFor={name} className="fw-bold fs-5 opacity-90">
        {title}
      </label>
      {input}
    </div>
  );

  // return
  return (
    <Form method="post" action="/room-edit/:roomID">
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
            required
            rows="2"
            className="d-block w-100 p-1"
            defaultValue={room.roomNumbers}
          />
        )}

        {/* input Choose a hotel */}
        {/* render option Hotel của Room đang EDIT */}
        {inputOther(
          "Choose a hotel",
          "hotelID",
          "25%",
          <select
            id="hotelID"
            required
            className="d-block w-100 p-1"
            defaultValue={belongHotel._id}
          >
            <option value={belongHotel._id}>{belongHotel.name}</option>
          </select>
        )}

        {/* input hidden */}
        <input type="hidden" name="roomID" value={room._id} />

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

export default RoomEditForm;
