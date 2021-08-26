import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React from "react";
import Footer from "../../components/common/footer";
import Head from "next/head";
import Header from "../../components/common/header";
import TaskTable from "../../components/tasks/table";
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

import Layout from "../../components/common/layout";
import PageHeader from "../../components/common/pageheader";

function Index() {

  const zakenHref = '/products/' + Math.floor(Math.random() * 10);

  return <>
    <Layout title="Zaken index" description="waar kan ik deze description zien">

      <PageHeader title="Zaken index"/>

      <TaskTable />

    </Layout >
  </>
}

export default Index
