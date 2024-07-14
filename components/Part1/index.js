import { Grid, Typography, Box, Button } from "@mui/material";
import React from "react";
import TypingAnimation from "./TypingAnimation"; // Import the TypingAnimation component
import { Fade, Bounce } from "react-awesome-reveal"; // Import animations from react-awesome-reveal
import Image from "next/image"; // Import Image from next/image

const Part1 = () => {
  const TypingComponent = [
    "Development of mobile applications",
    "Development and implementation of ERP systems",
    "User interface, user experience design",
    "IT consulting",
    "Optimization of IT consulting infrastructure",
  ];

  return (
    <Box marginTop={"100px"}>
      <Grid container className="container">
        <Grid item xs={6}>
          <>
            <Image
              src="https://marketing.uz/uploads/company/9210dceedee0f9e577158e4f31db88b4.jpg"
              alt="IT-Outsourcing Company"
              width={100}
              height={50}
              style={{ marginLeft: "100px" }}
            />
          </>
          <Typography
            sx={{
              fontWeight: "800",
              color: "#464359",
              fontSize: "40px",
              lineHeight: "54px",
            }}
          >
            IT-Outsourcing Company
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              sx={{
                fontWeight: "800",
                color: "#1b5bf7",
                fontSize: "30px",
                lineHeight: "54px",
              }}
            >
              <TypingAnimation texts={TypingComponent} />{" "}
            </Typography>
          </Box>
          <Box marginTop="20px">
            <Bounce triggerOnce>
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  height: "50px",
                  fontSize: "18px",
                  lineHeight: "26px",
                }}
              >
                Contact
              </Button>
            </Bounce>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Fade triggerOnce>
            <Image
              src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Part1;
