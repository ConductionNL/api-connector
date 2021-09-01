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

function createData(name, organisation, valid) {
  return {name, organisation, valid};
}

const rows = [
  createData('Inkomensverlaring', 'Belastingdienst', '1 september 2021'),
  createData('Uitreksel BRP', 'Gemeente Zaandam', '1 september 2021'),
  createData('Ondernemersverlaring', 'Kamer van koophandel', '1 september 2021'),
  createData('Kentekenbewijs', 'RDW', '1 september 2021'),
  createData('Eigendoms Akte', 'Kadaster', '1 september 2021'),
];


export default function ClaimsTable() {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Naam</TableCell>
            <TableCell align="right">Uitgifte</TableCell>
            <TableCell align="right">Geldig tot</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.organisation}</TableCell>
              <TableCell align="right">{row.valid}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary">
                  <Link href="/cases/1">
                    Bekijken
                  </Link>
                </Button>
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
