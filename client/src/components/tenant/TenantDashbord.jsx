import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext"; // TODO: Import the AuthContext

const TenantDashboard = () => {
  const { username, nextPaymentAmount, nextPaymentDueDate } =
    useContext(AuthContext); // Destructure the user's information from the AuthContext

  return (
    <Container>
      <h1>Welcome, {username}</h1>
      <p>
        Your next payment of ${nextPaymentAmount} is due on {nextPaymentDueDate}
      </p>
      <Button variant="primary">Make a Payment</Button>
      <Button variant="secondary">Terminate Lease</Button>
      <Button variant="light">Upload Files</Button>
    </Container>
  );
};

export default TenantDashboard;
