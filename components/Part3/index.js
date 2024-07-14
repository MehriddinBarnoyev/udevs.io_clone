import { Box, Typography } from "@mui/material";
import React from "react";
import "animate.css"; // Import animate.css
import { Fade, Slide } from "react-awesome-reveal";
import Image from "next/image"; // Import Image from next/image

export default function Part3() {
  return (
    <div style={{ background: "#F4F7FF" }}>
      <Box className="container">
        <Box sx={{ marginTop: "40px" }}>
          <Typography fontWeight={"800"} color={"#1b5bf7"} fontSize={"64px"}>
            Team
          </Typography>
        </Box>
        <Box>
          <div className="row">
            <div className="col">
              <Typography
                sx={{ fontWeight: "500", color: "#464359", fontSize: "20px" }}
              >
                For each project, we form a team that includes a <br /> project
                manager, business analyst, UI / UX designer, <br /> DevOps, QA
                engineer, backend and front-end <br /> developers.
              </Typography>
              <Typography fontWeight={700} color={"#1b5bf7"} fontSize={"120px"}>
                100+
              </Typography>
              <Typography fontWeight={800} color={"#464359"} fontSize={"40px"}>
                Dedicated team
              </Typography>
            </div>
            <div className="col">
              <Box>
                <Fade direction="in" triggerOnce>
                  <Image
                    src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
                    alt="Team Icon"
                    width={500}
                    height={500}
                  />
                </Fade>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
