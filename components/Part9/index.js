import React, { useState } from "react";
import { Box, Grid, Typography, Button, ButtonGroup } from "@mui/material";
import Image from "next/image";

const tools = [
  {
    category: "Devops",
    name: "Prometheus",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/2066px-Prometheus_software_logo.svg.png",
  },
  {
    category: "Devops",
    name: "Loki",
    imgSrc: "https://files.readme.io/e5e1b43-grafana-loki.png",
  },
  {
    category: "Devops",
    name: "Bitbucket",
    imgSrc:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/44_Bitbucket_logo_logos-512.png",
  },
  {
    category: "Devops",
    name: "Gitlab",
    imgSrc:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
  },
  {
    category: "Mobile",
    name: "Kotlin",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
  },
  {
    category: "Mobile",
    name: "Java",
    imgSrc: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
  },
  {
    category: "Mobile",
    name: "Android",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/logo-android.svg",
  },
  {
    category: "Infrastructure",
    name: "Azure",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png",
  },
  {
    category: "Infrastructure",
    name: "GCP",
    imgSrc:
      "https://download.logo.wine/logo/Google_Cloud_Platform/Google_Cloud_Platform-Logo.wine.png",
  },
  {
    category: "Infrastructure",
    name: "DIgital",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/1024px-DigitalOcean_logo.svg.png",
  },
  {
    category: "Infrastructure",
    name: "AWS",
    imgSrc:
      "https://partner.zoom.us/wp-content/uploads/2022/12/2022_Zoom-AWS_Lockup_RGB-1-e1672857797889-1024x760.png",
  },
  {
    category: "Infrastructure",
    name: "Kubernates",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },
  {
    category: "Devops",
    name: "ELK",
    imgSrc:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/41220c30338497.561e64739ed3e.png",
  },
  {
    category: "Devops",
    name: "Grafana",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/351px-Grafana_icon.svg.png",
  },
  {
    category: "Devops",
    name: "Terraform",
    imgSrc: "https://www.svgrepo.com/show/376353/terraform.svg",
  },
  {
    category: "Mobile",
    name: "IOS",
    imgSrc:
      "https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png",
  },
  {
    category: "Mobile",
    name: "Swift",
    imgSrc: "https://1000logos.net/wp-content/uploads/2020/09/Swift-Logo.png",
  },
  {
    category: "Mobile",
    name: "Flutter",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-flutter-3628777-3030139.png?f=webp&w=256",
  },
  {
    category: "Frontend",
    name: "Next.js",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",
  },
  {
    category: "Frontend",
    name: "React.js",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    category: "Frontend",
    name: "JS",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png",
  },
  {
    category: "UX/UI",
    name: "Balsamic",
    imgSrc:
      "https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
  },
  {
    category: "UX/UI",
    name: "Invision",
    imgSrc:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a80410421359ac77ab7691c63881741d/invision.png",
  },
  {
    category: "UX/UI",
    name: "Figma",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
  },
  {
    category: "Devops",
    name: "Docer",
    imgSrc:
      "https://logos-world.net/wp-content/uploads/2021/02/Docker-Logo.png",
  },
  {
    category: "Backend",
    name: "PostSQL",
    imgSrc:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png",
  },
  {
    category: "Backend",
    name: "Python",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
  },
  {
    category: "Backend",
    name: "NodeJs",
    imgSrc: "https://www.svgrepo.com/show/376337/node-js.svg",
  },
  {
    category: "Backend",
    name: "PHP",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/php-icon-1024x1024-gd953j9m.png",
  },
  {
    category: "Backend",
    name: "GO",
    imgSrc: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
  },
  {
    category: "Frontend",
    name: "AntDesn",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/ant-design-icon-512x512-xbdsnx83.png",
  },
  {
    category: "Frontend",
    name: "Gatsby",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/d/d0/Gatsby_Logo.png",
  },
  {
    category: "Frontend",
    name: "Vue js",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-256/free-vuejs-1175052.png",
  },
  {
    category: "UX/UI",
    name: "Principle",
    imgSrc:
      "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Principle-512.png",
  },
  {
    category: "UX/UI",
    name: "Sketch",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Sketch_Logo.svg/1133px-Sketch_Logo.svg.png",
  },
  {
    category: "UX/UI",
    name: "AdobeSuit",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Creative_Cloud.svg",
  },
  {
    category: "Testing",
    name: "YourTrack",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/YouTrack_Icon.svg/2048px-YouTrack_Icon.svg.png",
  },
  {
    category: "Testing",
    name: "Appium",
    imgSrc:
      "https://seeklogo.com/images/A/appium-logo-7A2DD5B4E3-seeklogo.com.png",
  },

  {
    category: "Testing",
    name: "Cypress",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/cypress-icon-2048x2048-swmlmjca.png",
  },
  {
    category: "Testing",
    name: "Jmeter",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Apache_Feather_Logo.svg/1158px-Apache_Feather_Logo.svg.png",
  },
  {
    category: "Backend",
    name: "MongoDB",
    imgSrc: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    category: "Backend",
    name: "Casandra",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png",
  },
  {
    category: "Frontend",
    name: "SASS",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",
  },
  {
    category: "Frontend",
    name: "MUI",
    imgSrc:
      "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",
  },
  {
    category: "UX/UI",
    name: "Zeplin",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/zeplin-icon-2048x1638-dunjcj78.png",
  },
  {
    category: "UX/UI",
    name: "Illustrator",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png",
  },
  {
    category: "UX/UI",
    name: "Lottie",
    imgSrc:
      "https://static.lottiefiles.com/brand/logos/lottiefiles_for_white.png",
  },
  {
    category: "UX/UI",
    name: "Photoshop",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png",
  },

  // Add more tools here...
];

const categories = [
  "Frontend",
  "Backend",
  "Devops",
  "Testing",
  "UX/UI",
  "Infrastructure",
  "Mobile",
];

const Part9 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Box sx={{ background: "#F4F7FF", padding: "20px" }}>
    <div className="container">
      <Typography
        fontWeight={700}
        color="#1b5bf7"
        fontSize={{ xs: "30px", sm: "40px", md: "50px", lg: "60px" }}
        fontFamily="Manrope, sans-serif"
        marginTop={"40px"}
      >
        Tools
      </Typography>
      <ButtonGroup>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategorySelect(category)}
            sx={{
              background: selectedCategory === category ? "#1b5bf7" : "#E0E8FF",
              color: selectedCategory === category ? "#FFFFFF" : "#000000",
            }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {tools.map((tool, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={index}>
            <Box
              sx={{
                background: selectedCategory
                  ? tool.category === selectedCategory
                    ? "#E0E8FF"
                    : "#FFFFFF"
                  : "#FFFFFF",
                padding: "20px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <Image
                src={tool.imgSrc}
                alt={tool.name}
                width={50}
                height={50}
              />
              <Typography sx={{ mt: 1 }}>{tool.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  </Box>
  );
};

export default Part9;
