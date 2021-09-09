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

export default function ClaimsTable() {

  var { data: claims } = useGet({
    path: "gateways/waardepapieren-register/certificates"
  });

  /* lets catch hydra */
  if (claims != null && claims["hydra:member"] !== undefined) {
    claims = claims["hydra:member"];
  }

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1, hide: true },
    {
      field: 'type',
      headerName: 'Type',
      flex: 1,
      editable: true,
    },
    {
      field: 'organization',
      headerName: 'Organisatie',
      flex: 1,
      editable: true,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { claims ? (
        <DataGrid
          rows={claims}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          checkboxSelection
          disableSelectionOnClick
        />
      )
      :
        (
          <DataGrid
            rows={[]}
            loading={true}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[100]}
            checkboxSelection
            disableSelectionOnClick
          />
        )
      }

    </div>
  );
}
