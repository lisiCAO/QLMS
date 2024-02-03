import React, { useState, useEffect } from "react";
import { Table, Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import dayjs from "dayjs";
import ApiService from "../../../services/ApiService";

const LeaseList = () => {
  const [leases, setLeases] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedLease, setSelectedLease] = useState(null);

  useEffect(() => {
    // API call to fetch leases
    // fetchLeases();
    ApiService.fetchLeases() 
    .then((data) => {
        setLeases(data);
    })
    .catch((error) => {
        console.error('Error fetching Leases:', error);
    });
  }, []);

  const handleShowDetailModal = (lease) => {
    setSelectedLease(lease);
    setShowDetailModal(true);
  };

  const handleCloseDetailModal = () => {
    setShowDetailModal(false);
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
      {/* Show lease detail modal */}
      <Modal show={showDetailModal} onHide={handleCloseDetailModal}>
        <Modal.Header closeButton>
          <Modal.Title>Lease Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedLease ? (
            <div>
              <p><strong>Lease ID:</strong> {selectedLease.lease_id}</p>
              <p><strong>Property ID:</strong> {selectedLease.property_id}</p>
              <p><strong>Tenant User ID:</strong> {selectedLease.tenant_user_id}</p>
              <p><strong>Start Date:</strong> {dayjs(selectedLease.start_date).format("MM/DD/YYYY")}</p>
              <p><strong>End Date:</strong> {dayjs(selectedLease.end_date).format("MM/DD/YYYY")}</p>
              {/* Add more lease details here */}
            </div>
          ) : <p>No lease selected</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LeaseList;
