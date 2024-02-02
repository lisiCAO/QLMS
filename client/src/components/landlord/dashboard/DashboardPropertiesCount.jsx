import { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import ListBulletIcon from "@heroicons/react/24/solid/ListBulletIcon";

const DashboardPropertiesCount = () => {
  const [value, setValue] = useState({
    value: " 4 ",
  });
  // Add more sample data as needed

  // useEffect(() => {
  //   // Replace 'your-api-endpoint' with the actual API endpoint to fetch user data
  //   ApiService.fetchUserData('your-user-id')
  //     .then((data) => {
  //       setUser({
  //         value: data.propertiesCount,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

  return (
    <Card>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Properties Count
            </Typography>
            <Typography variant="h4">{value.value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <ListBulletIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashboardPropertiesCount;
