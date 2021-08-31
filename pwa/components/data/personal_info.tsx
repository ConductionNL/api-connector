import React from 'react'
import Box from "@material-ui/core/Box";
import {useGet, Poll, Get} from "restful-react";


export default function PersonalInfo({id}) {

  const { data: person } = useGet({
    path: "gateways/brp/ingeschrevenpersonen/" + id,
  });

  console.log("test2:");
  console.log(person);

  return (
    <Box paddingBottom={2}>
      <h4>Uw persoonlijke informatie</h4>
      <Box paddingTop={1}>
        {
          person != null && person.naam.aanschrijfwijze !== null &&
          <p><b>Naam: </b>{person.naam.aanschrijfwijze}</p>
        }
        {
          person != null && person.geboorte.plaats.omschrijving !== null &&
          <p><b>Geboorteplaats: </b>{person.geboorte.plaats.omschrijving}</p>
        }
        {
          person != null && person.verblijfplaats !== null &&
          <p>
            <b>Verblijfplaats: </b>{person.verblijfplaats.adresregel1 + ", " + person.verblijfplaats.adresregel2 + ", " + person.verblijfplaats.adresregel3}
          </p>
        }
      </Box>
    </Box>
  );
}
