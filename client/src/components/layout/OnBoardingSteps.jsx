import React from 'react';
import { Container, ListGroup, ProgressBar } from 'react-bootstrap';
import { FaClipboardList, FaHome, FaMoneyCheck, FaWrench } from 'react-icons/fa';
import './OnBoardingStep.scss'
const OnboardingSteps = () => {
  const steps = [
    { icon: FaClipboardList, text: 'Subscribe to DoorLoop' },
    { icon: FaHome, text: 'Add Your Company Info' },
    { icon: FaHome, text: 'Add Your Properties' },
    { icon: FaMoneyCheck, text: 'Accept Rent Payments' },
    { icon: FaWrench, text: 'Setup Your Auto Late Fees' },
    // ... add more steps as needed
  ];

  return (
    <Container className="onboarding-steps">
      <h4>GET STARTED WITH DOORLOOP</h4>
      <p>Let us help you get the most out of DoorLoop. Just follow the steps and you will be up & running in no time.</p>
      <ProgressBar now={78} label={`${78}%`} />

      <ListGroup variant="flush">
        {steps.map((step, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <step.icon className="icon" />
            {step.text}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <button className="btn-toggle">Always show this page at start</button>
    </Container>
  );
};

export default OnboardingSteps;