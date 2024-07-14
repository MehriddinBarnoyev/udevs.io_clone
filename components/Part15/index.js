import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FolderIcon from "@mui/icons-material/Folder";
import GroupIcon from "@mui/icons-material/Group";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const steps = [
  {
    title: "Contact",
    description: "Send us your project request or project idea.",
    icon: <PhoneIcon sx={{ fontSize: 50, color: "#1B5BF7" }} />,
  },
  {
    title: "Analysis",
    description: "We will contact you to clarify your project requirements.",
    icon: <ShowChartIcon sx={{ fontSize: 50, color: "#1B5BF7" }} />,
  },
  {
    title: "Offer",
    description: "We will provide you with our free, non-binding application.",
    icon: <FolderIcon sx={{ fontSize: 50, color: "#1B5BF7" }} />,
  },
  {
    title: "Team",
    description: "We provide a team for your requirements.",
    icon: <GroupIcon sx={{ fontSize: 50, color: "#1B5BF7" }} />,
  },
  {
    title: "Start",
    description: "You will get to know the team and we'll get started.",
    icon: <PowerSettingsNewIcon sx={{ fontSize: 50, color: "#1B5BF7" }} />,
  },
];

const Part15 = () => {
  return (
    <div className="container">
      <Typography variant="h3" fontWeight="bold" color="#1B5BF7" gutterBottom>
        How we work!
      </Typography>
      <Box sx={{ padding: "80px 20px", textAlign: "center" }}>
        <Grid container justifyContent="center" spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#E0E8FF",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 2,
                  }}
                >
                  {step.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  {step.title}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Part15;
