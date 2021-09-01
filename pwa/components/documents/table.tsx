import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import {Link} from "@material-ui/core";


function createData(name, reference) {
  return {name, reference};
}

const rows = [
  createData('Waardebepaling auto', '95128942'),
];


export default function ArrangementsTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Naam</TableCell>
            <TableCell align="right">Referentie</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.reference}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary">
                  <Link href="/cases/1">
                    Downloaden
                  </Link>
                </Button>
                <Button variant="outlined" color="primary">
                  <Link href="/cases/1">
                    Delen
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
