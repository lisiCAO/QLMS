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

const AccountProfile = () => {
  const [user, setUser] = useState({
    avatar: "user.profile_picture",
    city: "Montreal",
    country: "Canada",
    role: "landlord",
    name: "Michael Scott",
  });
  // Add more sample data as needed

  // useEffect(() => {
  //   // Replace 'your-api-endpoint' with the actual API endpoint to fetch user data
  //   ApiService.fetchUserData('your-user-id')
  //     .then((data) => {
  //       setUser({
  //         avatar: data.profile_picture,
  //         city: data.city,
  //         country: data.country,
  //         role: data.jobTitle,
  //         name: data.name,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

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
