import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
  Divider,
  CardActions,
  Button,
} from "@mui/material";

const AccountProfile = ({userData}) => {
  const [user, setUser] = useState({
    avatar: "",
    city: "",
    country: "",
    jobTitle: "",
    name: "",
  });
  
  useEffect(() => {
    console.log(userData);
    if (userData) {
      setUser({
        avatar: userData.profile_picture_url,
        city: userData.city_name,
        country: userData.province,
        jobTitle: userData.role,
        name: userData.username,
      });
    }
  }
  , [userData]);
  
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 80,
              mb: 2,
              width: 80,
            }}
          />
          <Typography gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.city} {user.country}
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {user.jobTitle}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
