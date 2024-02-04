import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import ApiService from "../../services/ApiService";

const AccountProfileDetails = ({ userData}) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    firstName: "Micheal",
    lastName: "Scott",
    email: "demo@devias.io",
    phone: "",
    province: "Montreal",
    country: "Quebec",
  });

  useEffect(() => {
    if (userData) {
      setValues({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        province: userData.province,
        country: userData.country,
      });
    }
  }
  , [userData]);


  // Sample data

  // useEffect(() => {
  //   // Fetch user details from the backend when the component mounts
  //   ApiService.fetchUserData('your-user-id')
  //     .then((data) => {
  //       setValues({
  //         firstName: data.firstName,
  //         lastName: data.lastName,
  //         email: data.email,
  //         phone: data.phone,
  //         province: data.province,
  //         country: data.country,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();



    try{
      const response = await ApiService.updateUserData('your-user-id', values);
      console.log(response);
      setSuccess('User data updated successfully');
    } catch (error) {
      setMessage(error.message || 'Failed to update user data');
    }


  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  required
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Province"
                  name="province"
                  onChange={handleChange}
                  required
                  value={values.province}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}
        <CardActions sx={{ justifyContent: "flex-end" }}>
          
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;