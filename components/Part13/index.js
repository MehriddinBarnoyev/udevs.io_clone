import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import SchoolIcon from "@mui/icons-material/School";
import AssistantIcon from "@mui/icons-material/Assistant";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Computer, MobileFriendly } from "@mui/icons-material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Image from "next/image";

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

const Part13 = () => {
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
                <Image
                  src="https://udevs.io/static/goodzone_app-deb2ced5c71cc717322a0f87cfe94652.png"
                  alt="Delever"
                  width={1280} // Adjust width based on your image's natural width
                  height={720} // Adjust height based on your image's natural height
                  layout="responsive" // Ensures the image scales responsively
                />
              </Box>
            </div>
            <div className="col-lg-6">
              <Image
                src="https://dostavkainfo.uz/wp-content/uploads/2020/04/goodzone.jpg"
                alt=""
                width={150}
                height={120}
              />
              <Box>
                <Button
                  startIcon={<WorkspacePremiumIcon />}
                  sx={{
                    background: "#FFDDD3",
                    color: "#FF5755",
                    borderRadius: "20px",
                  }}
                >
                  E-Ecommerce
                </Button>
              </Box>
              <Box>
                <Typography fontWeight={500} color="#18191f" fontSize="24px">
                  Goodzone - Internet shop of household appliances in
                  Uzbekistan.
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
          </div>
        </Box>
      </div>
    </Box>
  );
};
export default Part13;
