import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LanIcon from "@mui/icons-material/Lan";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import {
  Computer,
  MobileFriendly,
  MobileOffOutlined,
} from "@mui/icons-material";
import StreamIcon from "@mui/icons-material/Stream";
import { Fade } from "react-awesome-reveal";
import Image from "next/image"; // Import Image from next/image

const platforms = [
  {
    title: "Frontend",
    icon: <LanIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />,
  },
  {
    title: "Backend",
    icon: (
      <ColorLensIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Architecture",
    icon: (
      <SwapCallsIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Dev Ops",
    icon: (
      <MobileFriendly
        sx={{ width: "50px", height: "50px", color: "#1B5BF7" }}
      />
    ),
  },
  {
    title: "UI/Ux",
    icon: <Computer sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />,
  },
  {
    title: "QA",
    icon: (
      <StreamIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
];

const Part8 = () => {
  return (
    <div className="container pt-3" style={{ paddingBottom: "80px" }}>
      <Typography
        fontWeight={700}
        color="#1b5bf7"
        fontSize="60px"
        fontFamily="Manrope, sans-serif"
        marginTop={"40px"}
      >
        IT consulting
      </Typography>

      <Box>
        <div className="row">
          <div className="col pt-5">
            <Box>
              <Typography fontWeight={500} color="#18191f" fontSize="24px">
                We can improve the qualifications of your employees thereby
                increasing the efficiency of your company
              </Typography>
            </Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {platforms.map((platform, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box
                    sx={{
                      background: "#F4F7FF",
                      padding: "20px",
                      textAlign: "center",
                      borderRadius: "8px",
                    }}
                  >
                    {platform.icon}
                    <Typography sx={{ mt: 1, fontSize: "20px" }}>
                      {platform.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className="col ms-5">
            <Fade triggerOnce>
              <Image
                src="https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg"
                alt="Mobile Development"
                width={800}
                height={600}
                style={{ width: "80%", height: "auto" }}
              />
            </Fade>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Part8;
