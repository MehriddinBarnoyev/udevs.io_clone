import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Groups2Icon from "@mui/icons-material/Groups2";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SettingsIcon from "@mui/icons-material/Settings";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import OptimizationIcon from "@mui/icons-material/TrendingUp";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { Fade } from "react-awesome-reveal";

const services = [
  { title: "Team", icon: <Groups2Icon fontSize="large" /> },
  {
    title: "Development of mobile applications",
    icon: <PhoneIphoneIcon fontSize="large" />,
  },
  {
    title: "Development, implementation ERP",
    icon: <SettingsIcon fontSize="large" />,
  },
  {
    title: "User interface, User experience design",
    icon: <DesignServicesIcon fontSize="large" />,
  },
  {
    title: "Optimization IT consulting infrastructure",
    icon: <OptimizationIcon fontSize="large" />,
  },
  {
    title: "IT consulting and developing web site",
    icon: <LaptopMacIcon fontSize="large" />,
  },
];

export default function Part2() {
  return (
    <div className="container p-5">
      <Box sx={{ marginTop: "40px" }}>
        <Fade triggerOnce>
          <Typography fontWeight={"800"} color={"#1b5bf7"} fontSize={"64px"}>
            Our service
          </Typography>
        </Fade>
      </Box>
      <Box justifyContent={"center"}>
        <Fade direction="up" triggerOnce>
          <Grid container spacing={2}>
            {services.map((service, index) => (
              <>
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    style={{
                      background: "#F4F7FF",
                      padding: "20px",
                      paddingTop: "60px",
                      paddingBottom: "80px",
                    }}
                  >
                    <Box color={"#1b5bf7"} display="flex" mb={2}>
                      {service.icon}
                    </Box>
                    <Box display="flex">
                      <Typography fontSize="20px" fontWeight="bold">
                        {service.title}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </>
            ))}
          </Grid>
        </Fade>
      </Box>
    </div>
  );
}
