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
    avatar: "user.profile_picture",
    city: "Montreal",
    country: "Canada",
    role: "landlord",
    name: "Michael Scott",
  });
  
  useEffect(() => {
    if (userData) {
      setUser({
        avatar: userData.profile_picture,
        city: userData.city,
        country: userData.country,
        role: userData.jobTitle,
        name: userData.name,
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
