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
    title: "UX",
    icon: <LanIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />,
  },
  {
    title: "UI",
    icon: (
      <ColorLensIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Prototyping",
    icon: (
      <SwapCallsIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
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
  {
    title: "Atomic design",
    icon: (
      <StreamIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
];

const technologies = [
  {
    title: "Figma",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
  },
  {
    title: "Sketch",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png",
  },
  {
    title: "Lottie",
    imgSrc:
      "https://static.lottiefiles.com/brand/logos/lottiefiles_for_white.png",
  },
  {
    title: "Illustrator",
    imgSrc:
      "https://1000logos.net/wp-content/uploads/2020/06/Illustrator-Logo.png",
  },
];

const Part6 = () => {
  return (
    <div className="container pt-3">
      <Typography
        fontWeight={700}
        color="#1b5bf7"
        fontSize="60px"
        fontFamily="Manrope, sans-serif"
        marginTop={"40px"}
      >
        UI / UX design
      </Typography>

      <Box>
        <div className="row">
          <div className="col pt-5">
            <Box>
              <Typography fontWeight={500} color="#18191f" fontSize="24px">
                Our company takes a human-centered approach to design
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
            <Box marginTop={"20px"}>
              <Typography fontSize={"32px"}>Technologies</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {technologies.map((technology, index) => (
                  <Grid item xs={12} sm={3} key={index}>
                    <Box
                      sx={{
                        textAlign: "center",
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        src={technology.imgSrc}
                        alt={technology.title}
                        width={50}
                        height={50}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Typography sx={{ mt: 1 }} fontSize={"20px"}>
                        {technology.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
          <div
            className="col ms-5"
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
                src="https://udevs.io/static/design-0951fd1e6afedab989f63e037535430f.png"
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

export default Part6;
