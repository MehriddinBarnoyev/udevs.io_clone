import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "#f5f5f5", padding: "40px 0", marginTop: "50px" }}
    >
      <div className="container">
        <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
          <Image
            src="https://marketing.uz/uploads/company/9210dceedee0f9e577158e4f31db88b4.jpg"
            alt="Udevs"
            width={168}
            height={56}
            style={{ marginBottom: "20px" }}
          />
        </Box>
        <div className="row">
          <div className="col">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              About us
            </Typography>
            <Typography>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Direction
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Command
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Tools
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Clients
              </Link>
            </Typography>
          </div>
          <div className="col">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Services
            </Typography>
            <Typography>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Development of mobile applications
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Development and implementation ERP systems
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                User interface, User experience design
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                IT consulting
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Optimization IT consulting infrastructure
              </Link>
            </Typography>
          </div>
          <div className="col">
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              Portfolio
            </Typography>
            <Typography>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Delever
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Sms.uz
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Goodzone
              </Link>
              <Link
                href="#"
                sx={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#007BFF",
                }}
              >
                Iman
              </Link>
            </Typography>
          </div>
        </div>
        <div className="row " style={{ marginTop: "20px" }}>
          <div className="col text-center">
            <Typography sx={{ fontSize: "14px", color: "#777" }}>
              © 2024 Udevs. All rights reserved
            </Typography>
          </div>
          <div className="col">
            <div>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://cdn.freebiesupply.com/logos/large/2x/twitter-3-logo-png-transparent.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                  alt="YouTube"
                  width={40}
                  height={40}
                  style={{ marginRight: "10px" }}
                />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
