import React, { useState, useEffect } from "react";
import { Table, Button, InputGroup, FormControl } from "react-bootstrap";
import dayjs from "dayjs";

const LeaseList = () => {
  const [leases, setLeases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // API call to fetch leases
    // fetchLeases();
  }, []);

  // assume the following API methods are available
  const fetchLeases = async () => {
    // const response = await ApiService.getLeases(); // TODO: replace with real API call
    // setLeases(response.data);
  };

  const renewLease = async (lease) => {
    const startDate = dayjs(lease.start_date);
    const endDate = dayjs(lease.end_date);
    const newEndDate = endDate.add(endDate.diff(startDate));

    // update the lease with the new end date
    const updatedLease = {
      ...lease,
      end_date: newEndDate.format("YYYY-MM-DD"),
    };

    try {
      // const response = await ApiService.updateLease(lease.lease_id, updatedLease); // TODO: replace with real API call
      // console.log(response.data);
      // fetchLeases();
    } catch (error) {
      console.error("Failed to renew lease:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLeases = leases.filter(
    (lease) =>
      lease.property_id.toString().includes(searchTerm) ||
      lease.tenant_user_id.toString().includes(searchTerm)
  );

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search leases"
          aria-label="Search leases"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lease</th>
            <th>End date</th>
            <th>Status</th>
            <th>Next Steps</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeases.map((lease) => (
            <tr key={lease.lease_id}>
              <td>{lease.property_id}</td>
              <td>{dayjs(lease.end_date).format("MM/DD/YYYY")}</td>
              <td>{lease.status}</td>
              <td>
                <Button variant="primary" onClick={() => renewLease(lease)}>
                  Renew Lease
                </Button>
                <Button variant="danger">End Lease</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LeaseList;
