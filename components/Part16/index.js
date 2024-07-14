import React from "react";
import { Box, Card, Typography } from "@mui/material";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import { Telegram } from "@mui/icons-material";
import Image from "next/image"; // Import Image from next/image

export default function Part16() {
  return (
    <div className="container" style={{ maxWidth: "1200px", margin: "auto" }}>
      <Typography variant="h3" fontWeight="bold" color="#1B5BF7" gutterBottom>
        Contact us
      </Typography>
      <Card className="shadow pt-5 pb-5">
        <Box sx={{ padding: "20px" }}>
          <div className="row">
            <div className="col">
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                Leave us a message
              </Typography>
              <div>
                <div
                  className="input-group input-group-lg"
                  style={{ marginBottom: "10px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Name"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div
                  className="input-group input-group-lg"
                  style={{ marginBottom: "10px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Your email"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <div
                  className="input-group input-group-lg"
                  style={{ marginBottom: "20px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Briefly describe your project"
                    style={{ width: "100%", height: "40px" }}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ width: "200px" }}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="col">
              <div style={{ paddingLeft: "20px" }}>
                <Box display={"flex"}>
                  <Box sx={{ color: "#1B5BF7" }}>
                    <EditLocationIcon />
                  </Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>
                    Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <Box color="#1B5BF7">
                    <Phone />
                  </Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>
                    <a
                      href="tel:+998336600999"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      +998 33 66 00 999
                    </a>
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <Box color="#1B5BF7">
                    <Email />
                  </Box>

                  <Typography sx={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>
                    <a
                      href="mailto:azizbek.b@udevs.io"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      azizbek.b@udevs.io
                    </a>
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <Box color="#1B5BF7">
                    <Telegram />
                  </Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "500", marginLeft: "10px" }}>
                    <a
                      href="https://t.me/azizbekbakhodirov"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      t.me/azizbekbakhodirov
                    </a>
                  </Typography>
                </Box>

                <div style={{ marginTop: "20px" }}>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                      alt="Instagram"
                      width={20}
                      height={20}
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://static.vecteezy.com/system/resources/previews/023/986/704/non_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                      alt="YouTube"
                      width={20}
                      height={20}
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                      alt="Facebook"
                      width={20}
                      height={20}
                      style={{ marginRight: "10px" }}
                    />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                      alt="Twitter"
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <iframe
                    src="https://yandex.com/map-widget/v1/?um=constructor%3A0a34b885c3cf6dd8b00f543a17c86e1b2d0b4d4152082b939c205d6b8a8c4195&amp;source=constructor"
                    width="300"
                    height="200"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
}
