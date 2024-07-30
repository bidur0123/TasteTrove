import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 10, // Reduced margin from 15 to 10
          textAlign: "center",
          p: 2,  // Reduced padding from 3 to 2
          "& h4": {
            fontWeight: "bold",
            my: 1,  // Reduced margin from 2 to 1
            fontSize: "2.5rem",
            color: "#3f51b5",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#555",
          },
          "@media (max-width:600px)": {
            mt: 0,
            p: 1,
            "& h4": {
              fontSize: "1.8rem",
            },
            "& p": {
              fontSize: "1rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Our Restaurant</Typography>
        <Typography variant="body1" paragraph>
          Welcome to our cozy corner where culinary delights meet a warm and inviting atmosphere. At our restaurant, we believe in the magic of great food and the joy of sharing it with loved ones. From the moment you step in, you'll be greeted by the tantalizing aromas of our carefully crafted dishes, each prepared with the finest ingredients and a touch of love.
        </Typography>
        <Typography variant="body1" paragraph>
          Our menu is a celebration of flavors, blending traditional recipes with modern twists. Whether you're here for a quick lunch, a romantic dinner, or a family gathering, we have something for everyone. Indulge in our chef's specials, savor the freshness of our salads, and don't forget to leave room for our decadent desserts.
        </Typography>
        <Typography variant="body1" paragraph>
          At our restaurant, we don't just serve food; we create experiences. Our attentive staff is dedicated to making your visit memorable, ensuring that every detail is perfect. We are passionate about what we do, and it shows in every plate we serve.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing our restaurant. We look forward to serving you and making your dining experience truly special.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
