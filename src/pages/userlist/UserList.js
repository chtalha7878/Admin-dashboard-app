import React, { useState } from "react";
import "./userlist.css";
import { DataGrid} from "@mui/x-data-grid";
import {Link} from 'react-router-dom'
import { DeleteOutline } from "@mui/icons-material";
import { usersData } from "../../dataFile/userData";

export default function UserList() {
  const [data, setData] = useState(usersData);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user">
            <img
              src={params.row.avatar}
              alt="no internet conection"
              className="userImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "email", width: 200 },
    {
      field: "status",
      headerName: "status",
      width: 90,
    },
    {
      field: "payment",
      headerName: "payments",
      width: 160,
    },
    {
      field: "action",
      headerName: "action",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={"/user/" + params.row.id}>
            
            <button className="editUser">Edit</button>
            </Link>
            <DeleteOutline
              className="deletelist"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        disableSelectionOnClick
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
