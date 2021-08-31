import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {useGet, Poll, Get} from "restful-react";



export default function PersonalInfo({person = null}) {

  const { data: test } = useGet({
    path: "https://dog.ceo/api/breeds/image/random",
  });

  console.log('test call');
  console.log(test);

  const { data: test2 } = useGet({
    path: "gateways/brp/ingeschrevenpersonen/999995935",
  });
  console.log(test2);

  return (
    <Box paddingBottom={2}>
      <h4>Uw persoonlijke informatie</h4>
      <Box paddingTop={1}>
        {
          person.naam.aanschrijfwijze !== null &&
          <p><b>Naam: </b>{person.naam.aanschrijfwijze}</p>
        }
        {
          person.geboorte.plaats !== null &&
          <p><b>Geboorteplaats: </b>{person.geboorte.plaats}</p>
        }
        {
          person.verblijfplaats !== null &&
          <p>
            <b>Verblijfplaats: </b>{person.verblijfplaats.adresregel1 + ", " + person.verblijfplaats.adresregel2 + ", " + person.verblijfplaats.adresregel3}
          </p>
        }
      </Box>
    </Box>
  );
}
