import React from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";

const PageHeader = ({ title="Welcome to Demodam!", description="default-description"}) => {

    return (
    <>
      <Typography variant="h4">
        {title}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" >
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/">
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Divider />
    </>
  );

}

export default PageHeader;
