import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetails"; // 确保路径正确

const UserProfile = ({ userData }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="lg ">
        <Stack spacing={3}>
          <Typography variant="h4">Account</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <AccountProfile userData={userData} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <AccountProfileDetails userData={userData} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserProfile;
