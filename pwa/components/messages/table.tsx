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
import {Link} from "@material-ui/core";

export default function MessagesTable() {

  // var { data: claims } = useGet({
  //   path: "gateways/waardepapieren-register/certificates"
  // });
  //
  // /* lets catch hydra */
  // if (claims != null && claims["hydra:member"] !== undefined) {
  //   claims = claims["hydra:member"];
  // }

  function createData(id, name, afzender, ontvangen) {
    return { id, name, afzender, ontvangen };
  }

  const rows = [
    createData('1', 'Aanslag', 'Gemeente Zaandam', '1 september 2021'),
    createData('2', 'Parkeerbon', 'Gemeente Zaandam', '1 september 2021'),
    createData('3', 'Taxatieverslag', 'Gemeente Zaandam', '1 september 2021'),
  ];

  const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
      field: 'name',
      headerName: 'Naam',
      flex: 1,
      editable: true,
    },
    {
      field: 'afzender',
      headerName: 'Afzender',
      flex: 1,
      editable: true,
    },
    {
      field: 'ontvangen',
      headerName: 'Ontvangen',
      flex: 1,
      editable: true,
    },
    {
      field: "link",
      headerName: " ",
      renderCell: (cellValues) => {
        return <Link href={`/messages/${cellValues.row.id}`}>Lezen</Link>;
      }
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      { rows ? (
          <DataGrid
            rows={rows}
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
