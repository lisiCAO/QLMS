import { useState, useEffect } from "react";
import  ArrowRightIcon  from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const DashboardPropertiesList = (props) => {
  const [property, setProperty] = useState({
    id: "1",
    tenant_name: "John Doe",
    address: "1234 Main St",
    lease_endDate: "2023-12-31",
  });
  // Add more sample data as needed

  // useEffect(() => {
  //   // Replace 'your-api-endpoint' with the actual API endpoint to fetch user data
  //   ApiService.fetchPropertyData('your-user-id')
  //     .then((data) => {
  //       setProperty({
  //         id: data.id,
  //         tenant_name: data.tenant_name,
  //         address: data.address,
  //         lease_endDate: data.lease_endDate,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);

  return (
    <Card>
      <CardHeader title="Recent Lease End" />

      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Property Id</TableCell>
              <TableCell>Tenant</TableCell>
              <TableCell>Address</TableCell>
              <TableCell sortDirection="desc">Lease End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover key={property.id}>
              <TableCell>{property.id}</TableCell>
              <TableCell>{property.tenant_name}</TableCell>
              <TableCell>{property.address}</TableCell>
              <TableCell>{property.lease_endDate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

export default DashboardPropertiesList;
