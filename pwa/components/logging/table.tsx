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
      headerName: 'Handeling',
      width: 150,
      editable: true,
    },
    {
      field: 'verwerkingsnaam',
      headerName: 'Verwerking',
      width: 300,
      editable: true,
    }
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
