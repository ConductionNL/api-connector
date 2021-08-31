import React from 'react'
import PaperCard from "../../components/common/paperCard";
import {useGet, Poll, Get} from "restful-react";


export default function PersonalInfo({person = null}) {

  const { data: test } = useGet({
    path: "gateways/brp/ingeschrevenpersonen/999995935",
  });

  console.log(test);

  return (
    <PaperCard
      title="Persoonsgegevens"
      secondaryTitle="Bron: Basisregistratie Personen"
      description="In de Basisregistratie Personen (BRP) zijn persoonsgegevens geregistreerd, zoals gegevens over geboorte, verhuizing, huwelijk en vertrek naar het buitenland."
      link="/cases/1"
      linkText="Bekijk persoonsgegevens"
    />
    // <Box paddingBottom={2}>
    //   <h4>Uw persoonlijke informatie</h4>
    //   <Box paddingTop={1}>
    //     {
    //       person.naam.aanschrijfwijze !== null &&
    //       <p><b>Naam: </b>{person.naam.aanschrijfwijze}</p>
    //     }
    //     {
    //       person.geboorte.plaats !== null &&
    //       <p><b>Geboorteplaats: </b>{person.geboorte.plaats}</p>
    //     }
    //     {
    //       person.verblijfplaats !== null &&
    //       <p>
    //         <b>Verblijfplaats: </b>{person.verblijfplaats.adresregel1 + ", " + person.verblijfplaats.adresregel2 + ", " + person.verblijfplaats.adresregel3}
    //       </p>
    //     }
    //   </Box>
    // </Box>
  );
}
