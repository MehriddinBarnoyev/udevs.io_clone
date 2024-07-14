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
    title: "Architecture",
    icon: (
      <DescriptionIcon
        sx={{ width: "50px", height: "50px", color: "#1B5BF7" }}
      />
    ),
  },
  {
    title: "Auto testing",
    icon: (
      <SchoolIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Stress testing",
    icon: (
      <AssistantIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Load testing",
    icon: (
      <EditNoteIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Devops",
    icon: (
      <EmailIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Cloud",
    icon: (
      <WarehouseIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "CI / CD",
    icon: (
      <WarehouseIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
];

const Part7 = () => {
  return (
    <Box sx={{ background: "#F4F7FF", paddingBottom: "80px" }}>
      <div className="container" style={{ marginTop: "80px" }}>
        <Box>
          <Typography
            fontWeight={700}
            color="#1b5bf7"
            fontSize="60px"
            fontFamily="Manrope, sans-serif"
            marginTop={"40px"}
          >
            Optimization <br /> Infrastructure
          </Typography>
        </Box>
        <Box>
          <div className="row">
            <div
              className="col-lg-6 pt-5"
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
                  Our experienced professionals will help you optimize your
                  infrastructure
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
                        <Typography sx={{ mt: 1, fontSize: "20px" }}>
                          {item.title}
                        </Typography>
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
};
export default Part7;
