// import React/Hook/Router...
import { redirect } from "react-router-dom";

// function helper to fetch data form
const handleActionForm = async function (url, formData, navigation) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // lấy dữ liệu response
  const data = await response.json();

  // xử lý response er
  if (response.status !== 200) console.log(data.message);

  // xử response success => redirect đến trang hotels
  return redirect(navigation);
};

// export
export default handleActionForm;
