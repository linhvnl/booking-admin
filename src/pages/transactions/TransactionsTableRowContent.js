// import React/Hook/Router...
import React from "react";

// function Component
const TransactionsTableRowContent = function (props) {
  // lấy transactions từ props
  const transactions = props.transactions;

  // render row transactions
  const renderRowTransactions = transactions?.map((item, i) => {
    // xử lý render value room từ mảng dữ liệu
    const roomCol = item.room.flatMap((n) => n.roomNumbers).join(", ");

    // xử lý render value date từ mảng dữ liệu
    const dateCol = new Intl.DateTimeFormat("vi-VN").formatRange(
      new Date(item.dateStart),
      new Date(item.dateEnd)
    );

    // style className cho status
    const classNameStatus =
      item.status === "Booked"
        ? "bg-danger"
        : item.status === "Checkin"
        ? "bg-success"
        : item.status === "Checkout"
        ? "bg-secondary"
        : "";

    // style className chung cho cell trong table
    const classGeneral = "text-secondary px-2 py-3 text-nowrap overflow-hidden";
    const style = { textOverflow: "ellipsis" };

    // render 1 cell
    const tdCell = (content) => (
      <td className={classGeneral} style={style}>
        {content}
      </td>
    );

    // return render content
    return (
      <tr key={i} className="text-secondary">
        <th scope="row" className={classGeneral + " fw-normal"}>
          <div className="text-center">
            <input type="checkbox" name="transaction" value="" />
          </div>
        </th>
        {tdCell(item._id)}
        {tdCell(item.user.username)}
        {tdCell(item.hotel.name)}
        {tdCell(roomCol)}
        {tdCell(dateCol)}
        {tdCell("$" + item.price)}
        {tdCell(item.payment)}
        <td>
          <span
            className={`bg-opacity-50 rounded text-success p-1 ${classNameStatus}`}
          >
            {item.status}
          </span>
        </td>
        <td className="px-5"></td>
      </tr>
    );
  });

  // return
  return <>{renderRowTransactions}</>;
};

export default TransactionsTableRowContent;
