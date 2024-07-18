import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import styled from "styled-components";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ShareIcon from "@mui/icons-material/Share";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import ComputerIcon from "@mui/icons-material/Computer";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Image from "next/image";

// Styled components
const StyledTypography = styled(Typography)`
  position: relative;
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transition: 0.2s;
    transform: scale(1.05);
  }

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: #3f51b5; /* Change this to your desired underline color */
    left: 0;
    bottom: 0;
    transition: width 0.3s;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;

  &:hover {
    background-color: #3f51b5;
    color: #fff;
  }

  svg {
    color: inherit;
  }
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDropdown, setOpenDropdown] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubMenus, setMobileSubMenus] = useState({});

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const menuItems = [
    "Direction",
    "Command",
    "Services",
    "Tools",
    "Clients",
    "Portfolio",
    "Language",
  ];

  const handleMenuHover = (event, item) => {
    setAnchorEl(event.currentTarget);
    setOpenDropdown(item);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenDropdown("");
  };

  const handleMobileSubMenuToggle = (item) => {
    setMobileSubMenus((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  const dropdownItems = {
    Services: [
      {
        title: "Development of mobile applications",
        icon: <PhoneAndroidIcon />,
      },
      {
        title: "Development and implementation of ERP systems",
        icon: <ShareIcon />,
      },
      {
        title: "User interface, user experience design",
        icon: <IndeterminateCheckBoxIcon />,
      },
      {
        title: "IT consulting",
        icon: <ComputerIcon />,
      },
      {
        title: "Optimization of IT consulting infrastructure",
        icon: <SettingsIcon />,
      },
    ],
    Portfolio: [
      { title: "Delever", avatar: "D" },
      { title: "Sms.uz", avatar: "S" },
      { title: "Goodzone", avatar: "G" },
      { title: "Iman", avatar: "I" },
    ],
    Language: [
      { title: "English", flag: "https://flagcdn.com/w40/us.png" },
      { title: "Russian", flag: "https://flagcdn.com/w40/ru.png" },
      { title: "Uzbek", flag: "https://flagcdn.com/w40/uz.png" },
    ],
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="container ">
      <AppBar
        position="fixed"
        style={{
          background: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Toolbar>
          <Box display="flex" alignItems="center" width="100%">
            <Box flexGrow={1}>
              <Image
                src="https://marketing.uz/uploads/company/9210dceedee0f9e577158e4f31db88b4.jpg"
                alt="Logo"
                width={200} // Adjust width based on your design requirements
                height={70} // Adjust height based on your design requirements
              />
            </Box>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                  >
                    <IconButton
                      onClick={handleDrawerToggle}
                      sx={{ marginLeft: "auto" }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <List>
                      {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                          <ListItem
                            button
                            onClick={() => handleMobileSubMenuToggle(item)}
                          >
                            <ListItemText primary={item} />
                            {dropdownItems[item] ? (
                              mobileSubMenus[item] ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )
                            ) : null}
                          </ListItem>
                          {dropdownItems[item] && (
                            <Collapse
                              in={mobileSubMenus[item]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <List component="div" disablePadding>
                                {dropdownItems[item].map(
                                  (dropdownItem, idx) => (
                                    <ListItem button key={idx} sx={{ pl: 4 }}>
                                      <ListItemIcon>
                                        {dropdownItem.icon || (
                                          <Avatar
                                            src={dropdownItem.flag}
                                            alt={dropdownItem.title}
                                            sx={{ width: 24, height: 24 }}
                                          />
                                        )}
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={dropdownItem.title}
                                      />
                                    </ListItem>
                                  )
                                )}
                              </List>
                            </Collapse>
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexGrow={2}
                >
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={(event) => handleMenuHover(event, item)}
                      onMouseLeave={handleMenuClose}
                    >
                      <StyledTypography variant="body1">
                        {item}
                      </StyledTypography>
                      {dropdownItems[item] && (
                        <Menu
                          anchorEl={anchorEl}
                          open={openDropdown === item}
                          onClose={handleMenuClose}
                          MenuListProps={{
                            onMouseLeave: handleMenuClose,
                          }}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          {dropdownItems[item].map((dropdownItem, idx) => (
                            <StyledMenuItem key={idx}>
                              {dropdownItem.icon || (
                                <Avatar
                                  src={dropdownItem.flag}
                                  alt={dropdownItem.title}
                                  sx={{ width: 24, height: 24 }}
                                />
                              )}
                              {dropdownItem.title}
                            </StyledMenuItem>
                          ))}
                        </Menu>
                      )}
                    </div>
                  ))}
                </Box>
                <Box
                  flexGrow={1}
                  display="flex"
                  justifyContent="flex-end"
                  sx={{}}
                >
                  <StyledButton
                    variant="contained"
                    type="submit"
                    style={{ borderRadius: "10px", backgroundColor: "#3f51b5" }}
                  >
                    Contact
                  </StyledButton>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
