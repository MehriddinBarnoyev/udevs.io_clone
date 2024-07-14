import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import { Fade } from "react-awesome-reveal";
import Image from "next/image"; // Import Image from next/image

const platforms = [
  {
    title: "iOS",
    icon: (
      <AppleIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />
    ),
  },
  {
    title: "Android",
    icon: <AdbIcon sx={{ width: "50px", height: "50px", color: "#1B5BF7" }} />,
  },
  {
    title: "Crossplatform",
    icon: (
      <AppSettingsAltIcon
        sx={{ width: "50px", height: "50px", color: "#1B5BF7" }}
      />
    ),
  },
];

const technologies = [
  {
    title: "Swift",
    imgSrc:
      "https://e7.pngegg.com/pngimages/20/845/png-clipart-swift-apple-programming-language-xcode-books-orange-logo-thumbnail.png",
  },
  {
    title: "Kotlin",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    title: "Flutter",
    imgSrc:
      "https://w7.pngwing.com/pngs/537/866/png-transparent-flutter-hd-logo.png",
  },
];

const Part4 = () => {
  return (
    <div className="container pt-3">
      <Typography
        fontWeight={700}
        color="#1b5bf7"
        fontSize="60px"
        fontFamily="Manrope, sans-serif"
        marginTop={"40px"}
      >
        Development of mobile <br /> applications
      </Typography>

      <Box>
        <div className="row">
          <div className="col pt-5">
            <Box>
              <Typography fontWeight={500} color="#18191f" fontSize="24px">
                In collaboration with startups, we have learned how to create a
                creative and functional user interface for mobile applications.
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
                    <Typography sx={{ mt: 1 }}>{platform.title}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box marginTop={"20px"}>
              <Typography fontSize={"32px"}>Technologies</Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {technologies.map((technology, index) => (
                  <Grid item xs={12} sm={4} key={index}>
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
                src="https://udevs.io/static/mobile_dev-6180df87085fd146c501a19e6156fbd2.png"
                alt="Mobile Development"
                width={400}
                height={400}
                style={{ width: "80%", height: "auto" }}
              />
            </Fade>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Part4;
