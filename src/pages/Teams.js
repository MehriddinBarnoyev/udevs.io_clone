import React from "react";
import Layout from "../../components/Layout";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getMembers } from "../../api";
import { Inter } from "next/font/google";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const inter = Inter({ subsets: ["latin"] });

export default function Teams({ members }) {
  return (
    <Layout>
      <h1>Teams</h1>
      {Object.keys(members.group).map((teamName) => (
        <div key={teamName}>
          <h2>{teamName.charAt(0).toUpperCase() + teamName.slice(1)} Team</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label={`${teamName} team table`}>
              <TableHead>
                <TableRow>
                  <StyledTableCell>#</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Level</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {members.group[teamName].map((member, index) => (
                  <StyledTableRow key={member.id}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell>{member.name}</StyledTableCell>
                    <StyledTableCell>{member.level}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  // Fetch the data at build time
  const members = await getMembers();
  return {
    props: {
      members: members[0], // Assuming `members` is an array with one element as per your example
    },
  };
}
