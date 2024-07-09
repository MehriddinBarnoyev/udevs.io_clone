import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import { Box, Card, Grid, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DescriptionIcon from "@mui/icons-material/Description";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

let projects = [
  {
    title: "YouTube",
    icon: <YouTubeIcon />,
    path: "/youTube",
  },
  {
    title: "Express 24",
    icon: <DeliveryDiningIcon />,
    path: "/express",
  },
  {
    title: "Portfolio",
    icon: <DescriptionIcon />,
    path: "/portfolio",
  },
  {
    title: "Express 24_2",
    icon: <DeliveryDiningIcon />,
    path: "/express23",
  },
];

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <Typography variant="h3">Projects</Typography>
      <Grid container sx={{ mt: 3 }} spacing={3}>
        {projects.map((item) => (
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
              onClick={() => router.push("/projects" + item.path)}
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
                {item.icon}
              </Box>
              <Typography variant="h6">{item.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
