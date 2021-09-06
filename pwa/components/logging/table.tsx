import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {useGet} from "restful-react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function LoggingTable() {

  var { data: logging } = useGet({
    path: "gateways/logging/verwerkings_acties"
  });

  /* lets catch hydra */
  if (logging != null && logging["hydra:member"] !== undefined) {
    logging = logging["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'actieNaam',
      headerName: 'Actie',
      width: 300,
      editable: true,
    },
    {
      field: 'handelingsNaam',
      headerName: 'handeling',
      width: 150,
      editable: true,
    },
    {
      field: 'verwerkingsnaam',
      headerName: 'verwerking',
      width: 300,
      editable: true,
    }
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
   <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={logging}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[100]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
