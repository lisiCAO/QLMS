import React,{useState, useEffect } from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetails";
import ApiService from "../../services/ApiService";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(''); 
 
  useEffect(() => {
      const fetchProfile = async () => {
          try {
              const data = await ApiService.fetchTenantProfile();
              setCurrentUser(data);
          } catch (error) {
              console.error('Error fetching user data:', error);
              setError('Failed to fetch user data'); 
          } finally {
              setLoading(false); 
          }
      };

      fetchProfile();
  }, []);

  if (loading) {
      return <div>Loading...</div>; //  Set up a loading state
  }

  if (error) {
      return <div>Error: {error}</div>; // 
  }

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
              <AccountProfile userData={currentUser} />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <AccountProfileDetails userData={currentUser} />
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default UserProfile;
