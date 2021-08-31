import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

export default function PersonalInfo({person = null}) {

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
