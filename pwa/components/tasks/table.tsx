import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

export default function TaskTable({tasks = null}) {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Naam</TableCell>
            <TableCell align="right">Omschrijving</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tasks !== null &&
            tasks.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">
                      <Button variant="outlined" color="primary">
                        <Link href={"/tasks/" + row.id}>
                          Bekijken
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
