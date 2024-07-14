import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import AssistantIcon from "@mui/icons-material/Assistant";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import { Fade } from "react-awesome-reveal";
import Image from "next/image"; // Import Image from next/image

const items = [
  {
    title: "CRM",
    icon: (
      <DescriptionIcon
        sx={{ width: "50px", height: "50px", color: "#1B5BF7" }}
      />
    ),
  },
  {
    title: "eLearning",
    icon: (
      <SchoolIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "E-Commerce",
    icon: (
      <AssistantIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "POS",
    icon: (
      <EditNoteIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "SMS / Email",
    icon: (
      <EmailIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Warehouse",
    icon: (
      <WarehouseIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
];

export default function Part5() {
  return (
    <Box sx={{ background: "#F4F7FF", paddingBottom: "80px" }}>
      <div className="container">
        <Box>
          <Typography
            fontWeight={700}
            color="#1b5bf7"
            fontSize="60px"
            fontFamily="Manrope, sans-serif"
            marginTop={"40px"}
          >
            ERP systems
          </Typography>
        </Box>
        <Box>
          <div className="row">
            <div
              className="col-lg-6"
              style={{
                backgroundImage:
                  "url('https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
              }}
            >
              <Fade triggerOnce>
                <Image
                  src="https://udevs.io/static/desktop-be2444bb4c87961054714533a5d5a728.png"
                  alt="ERP Systems"
                  width={800}
                  height={600}
                  style={{ width: "80%", height: "auto" }}
                />
              </Fade>
            </div>
            <div className="col-lg-6">
              <Box>
                <Typography fontWeight={500} color="#18191f" fontSize="24px">
                  IT Systems of any level of complexity at a convenient time for
                  you
                </Typography>
              </Box>

              <Box marginTop={"20px"}>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Box
                        sx={{
                          background: "#E0E8FF",
                          padding: "20px",
                          textAlign: "center",
                          borderRadius: "8px",
                        }}
                      >
                        {item.icon}
                        <Typography sx={{ mt: 1 }}>{item.title}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
}