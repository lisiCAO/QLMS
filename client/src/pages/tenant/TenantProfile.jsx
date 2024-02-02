import React from 'react';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import  AccountProfile from '../../components/account/AccountProfile';
import  AccountProfileDetails  from '../../components/account/AccountProfileDetail';
const TenantProfile = () => {
    return (
        <>
          <title>
            Account 
          </title>
    
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              py: 8
            }}
          >
            <Container maxWidth="lg">
              <Stack spacing={3}>
                <div>
                  <Typography variant="h4">
                    Account
                  </Typography>
                </div>
                <div>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid
                      xs={12}
                      md={6}
                      lg={4}
                    >
                      {/* AccountProfile component, presumably displaying user profile information */}
                      <AccountProfile />
                    </Grid>
                    <Grid
                      xs={12}
                      md={6}
                      lg={8}
                    >
                      {/* AccountProfileDetails component, presumably displaying additional details about the user's account */}
                      <AccountProfileDetails />
                    </Grid>
                  </Grid>
                </div>
              </Stack>
            </Container>
          </Box>
        </>
      );
    }
export default TenantProfile;
