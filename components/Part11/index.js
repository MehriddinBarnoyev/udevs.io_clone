import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import AssistantIcon from "@mui/icons-material/Assistant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Computer, MobileFriendly } from "@mui/icons-material";
import { Fade, Slide } from "react-awesome-reveal";

const items = [
  {
    title: "Website",
    icon: (
      <LanguageIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Admin panel",
    icon: (
      <SchoolIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Crossplatform",
    icon: (
      <AssistantIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Mobile Design",
    icon: (
      <MobileFriendly
        sx={{ width: "50px", height: "50px", color: "#1B5BF7" }}
      />
    ),
  },
  {
    title: "WEB Design",
    icon: <Computer sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />,
  },
];

const Part11 = () => {
  return (
    <Box sx={{ paddingBottom: "80px" }}>
      <div className="container" style={{ marginTop: "80px" }}>
        <Box>
          <div className="row">
            <div
              className="col-lg-6 pt-5"
              style={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  marginTop: "90px",
                  marginRight: { lg: "90px", xs: "0" },
                  backgroundImage:
                    "url('https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png')",
                  backgroundSize: "120% 400px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Fade direction="in">
                  <Image
                    src="https://udevs.io/static/delever_app-d50b0f5953ce60eec080bad20fe68a78.png"
                    alt="Delever"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </Fade>
              </Box>
            </div>
            <div className="col-lg-6">
              <Typography
                fontWeight={700}
                color="#FF5722"
                fontSize="60px"
                fontFamily="Manrope, sans-serif"
                marginTop={"40px"}
              >
                Delever
              </Typography>
              <Box>
                <Button
                  startIcon={<LocalShippingIcon />}
                  sx={{
                    background: "#FFDDD3",
                    color: "#FF5755",
                    borderRadius: "20px",
                  }}
                >
                  Delivery
                </Button>
              </Box>
              <Box>
                <Typography fontWeight={500} color="#18191f" fontSize="24px">
                  Delever - Delivery service automation targeted at both
                  consumers and restaurants.
                </Typography>
              </Box>

              <Box marginTop={"20px"}>
                <Typography sx={{ fontSize: "30px" }}>What we did?</Typography>
                <Slide direction="right">
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
                </Slide>
              </Box>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};
export default Part11;
