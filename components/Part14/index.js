import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import AssistantIcon from "@mui/icons-material/Assistant";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { MobileFriendly } from "@mui/icons-material";
import Image from "next/image";

const items = [
  {
    title: "Mobile Design",
    icon: (
      <MobileFriendly sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Admin Panel",
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
];

const Part14 = () => {
  return (
    <Box sx={{ paddingBottom: "80px", marginTop: "80px" }}>
      <div className="container">
        <Box>
          <div className="row">
            <div className="col-lg-6">
              <Image
                src="https://udevs.io/static/iman-8d343bfc270029c181003633c9652299.svg"
                alt="Iman Logo"
                width={200}
                height={100}
              />
              <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
                <Button
                  startIcon={<AccountBalanceIcon />}
                  sx={{
                    background: "#CCF4EF",
                    color: "#01CAB0",
                    borderRadius: "20px",
                  }}
                >
                  Finance
                </Button>
              </Box>
              <Box>
                <Typography fontWeight={500} color="#18191f" fontSize="24px">
                  Iman - It is a mutual financing platform based on the
                  principles of Islamic Finance. Buyers, sellers, and investors
                  meet here.
                </Typography>
              </Box>

              <Box marginTop={"20px"}>
                <Typography sx={{ fontSize: "30px" }}>What we did?</Typography>
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
            <div className="col-lg-6" style={{ textAlign: "center" }}>
              <Box
                sx={{
                  marginTop: { xs: "30px", lg: "90px" },
                  marginRight: { lg: "90px", xs: "0" },
                  backgroundImage:
                    "url('https://udevs.io/static/bg_pattern-bfa00f19a06604ab492274cd3d9ea5cf.png')",
                  backgroundSize: "120% 400px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Image
                  src="https://udevs.io/static/imanApp-121e2c6598e85d2d53bec9ad7504dee3.png"
                  alt="Iman App"
                  width={800}
                  height={500}
                />
              </Box>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Part14;
