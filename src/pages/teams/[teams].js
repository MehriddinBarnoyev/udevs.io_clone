import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import { Typography } from "@mui/material";

export default function TeamDetail() {
  const router = useRouter();
  return (
    <Layout>
      <Typography variant="h4">Team: {router.query.teams}</Typography>
    </Layout>
  );
}
