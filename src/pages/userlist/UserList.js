import React, { useState } from "react";
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
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              src={params.row.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
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
      width: 120,
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
          <div className="flex items-center gap-4">
            <Link to={"/user/" + params.row.id}>
              <button className="bg-primary hover:bg-blue-700 text-white border-none rounded-lg py-1.5 px-3 text-sm font-medium transition duration-150 cursor-pointer">Edit</button>
            </Link>
            <DeleteOutline
              className="text-red-500 cursor-pointer hover:text-red-700 transition duration-150"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex-1 p-6 w-full">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[600px] w-full p-4">
        <DataGrid
          rows={data}
          columns={columns}
          disableSelectionOnClick
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </div>
    </div>
  );
}
