import React, { useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useAuth } from "./../../context/AuthContext";
import ApiService from "./../../services/ApiService";
import AccountProfile from "./AccountProfile";
import AccountProfileDetails from "./AccountProfileDetail";
const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = React.useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await ApiService.fetchUserData(user.uid);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }
  , [user.userId]);

  return (
    <>
      <title>Account</title>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <div>
              <Grid container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  {/* AccountProfile component, presumably displaying user profile information */}
                  <AccountProfile user={userData} />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  {/* AccountProfileDetails component, presumably displaying additional details about the user's account */}
                  <AccountProfileDetails user={userData}/>
                </Grid>
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default UserProfile;