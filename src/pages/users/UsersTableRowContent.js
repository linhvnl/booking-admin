// import React/Hook/Router...
import React from "react";

// function Component
const UsersTableRowContent = function (props) {
  // lấy transactions từ props
  const users = props.users;

  // render row transactions
  const renderRowUsers = users?.map((item, i) => {
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
            <input type="checkbox" name="user" value="" />
          </div>
        </th>
        {tdCell(item._id)}
        {tdCell(item.username)}
        {tdCell(item.fullName)}
        {tdCell(item.email)}
        {tdCell(item.phoneNumber)}
        <td>
          {item.isAdmin ? (
            <span
              className={`bg-opacity-50 rounded text-success p-1 bg-success`}
            >
              Admin
            </span>
          ) : (
            "Client"
          )}
        </td>
        <td className="px-5"></td>
      </tr>
    );
  });

  // return
  return <>{renderRowUsers}</>;
};

export default UsersTableRowContent;
