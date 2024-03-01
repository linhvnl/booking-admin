// import React/Hook/Router...
import React from "react";
import { Form } from "react-router-dom";

// function Component
const HotelNewForm = function (props) {
  // tạo mảng các thông tin input
  const inputInfoList = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "My Hotel",
    },
    {
      label: "Type",
      name: "type",
      type: "text",
      placeholder: "hotel",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      placeholder: "New York",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "elton st. 216",
    },
    {
      label: "Distance from City Center",
      name: "distance",
      type: "number",
      placeholder: "500",
    },
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "The best Hotel",
    },
    {
      label: "Description",
      name: "desc",
      type: "text",
      placeholder: "description",
    },
    {
      label: "Price",
      name: "cheapestPrice",
      type: "number",
      placeholder: "100",
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
    <div key={name} className="mb-4" style={{ width }}>
      <label htmlFor={name} className="fw-bold fs-5 opacity-90">
        {title}
      </label>
      {input}
    </div>
  );

  // return
  return (
    <Form method="post" action="/hotel-new">
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
            // cols="50"
            className="d-block w-100 p-1"
            placeholder="give comma between images"
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
            defaultValue="false"
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

export default HotelNewForm;
