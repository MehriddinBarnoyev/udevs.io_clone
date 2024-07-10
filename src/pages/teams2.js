import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";  // Adjusted import path
import { Box, Card, Grid, Typography } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const teams = [
  {
    title: "Frontend",
    logo: "https://www.frontendmentor.io/static/images/home-benefit-4.webp",
    path: "/frontend",
  },
  {
    title: "Backend",
    logo: "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T127A1PA4192PT21X6Y6D1023765479W1871H2245/views/1,width=1200,height=630,appearanceId=1,backgroundColor=F2F2F2,modelId=2846,crop=design/team-backend-programmer-small-buttons.jpg",
    path: "/backend",
  },
  {
    title: "Mobile",
    logo: "https://cdni.iconscout.com/illustration/premium/thumb/developer-team-building-mobile-application-2890185-2406688.png",
    path: "/mobile",
  },
  {
    title: "Designer",
    logo: "https://cdn5.vectorstock.com/i/1000x1000/79/29/design-team-vector-11357929.jpg",
    path: "/designers",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <h1>Team</h1>
      <Grid container sx={{ mt: 3 }} spacing={3}>
        {teams.map((item) => (
          <Grid key={item.title} item sx={{ p: 3 }} xs={12} sm={6} md={3}>
            <Card
              sx={{
                p: 3,
                mb: 2,
                backgroundColor: "#eb36d955",
                textAlign: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => router.push("/teams" + item.path)}
            >
              <Box
                sx={{
                  mb: 2,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginInline: "auto",
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <img src={item.logo} alt={item.title} style={{ width: "40px" }} />
              </Box>
              <Typography variant="h6">{item.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
