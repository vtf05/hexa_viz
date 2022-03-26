import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Col, Container, Row } from "react-bootstrap";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import ThumbDownOffAltSharpIcon from "@mui/icons-material/ThumbDownOffAltSharp";
import Sidenavbar from "../sidenavbar";
import { Step, StepLabel, Stepper } from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

function Sent(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(36, 33, 242) 0%,rgb(107, 121, 230) 50%,rgb(250, 250, 250) 100%)',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundImage:
          'linear-gradient( 95deg,rgb(36, 33, 242) 0%,rgb(107, 121, 230) 50%,rgb(250, 250, 250) 100%)',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundImage:
        'linear-gradient( 95deg,rgb(36, 33, 242) 0%,rgb(229, 237, 238) 50%,rgb(19, 37, 238) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundImage:
        'linear-gradient( 95deg,rgb(36, 33, 242) 0%,rgb(107, 121, 230) 50%,rgb(250, 250, 250) 100%)',
    }),
  }));
  
  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;
  
    const icons = {
      1: <SendSharpIcon />,
      2: <RemoveRedEyeSharpIcon />,
      3: <DoneAllIcon />,
      4:<ThumbDownOffAltSharpIcon />,
        };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  
  const steps = ['D1', 'D2', 'D3', 'D4'];
  const status='no';

  

  return (
    <>
      <Row >
        <Col md={2}>
          <Sidenavbar />
        </Col>
        <Col>
          <Container >
            <Accordion 
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Admission Documents
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Verification
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
              <Stack sx={{ width: '100%' }} spacing={4}>
                
                <Stepper
                  alternativeLabel
                  activeStep={1}
                  connector={<ColorlibConnector />}
                > 
                  {/* {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                        {label}
                        <li>
                          <ul>InReview: {status}</ul>
                          <ul>Approved: {status}</ul>
                          <ul>Sent:{status}</ul>
                        </li>
                      </StepLabel>
                    </Step>
                  ))} */}
                  <Step key='Student Section'>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                      Student Section
                        <li>
                          <ul>InReview: yes</ul>
                          <ul>Approved: yes</ul>
                          <ul>Sent:yes</ul>
                        </li>
                      </StepLabel>
                    </Step><Step key='Accounts Section '>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                      Accounts Section 
                        <li>
                          <ul>InReview: yes</ul>
                          <ul>Approved: not yet</ul>
                          <ul>Sent:no</ul>
                        </li>
                      </StepLabel>
                    </Step><Step key='Head of Department'>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                      Head of Department
                        <li>
                          <ul>InReview: {status}</ul>
                          <ul>Approved: {status}</ul>
                          <ul>Sent:{status}</ul>
                        </li>
                      </StepLabel>
                    </Step><Step key='CSVTU'>
                      <StepLabel StepIconComponent={ColorlibStepIcon}>
                        CSVTU
                        <li>
                          <ul>InReview: {status}</ul>
                          <ul>Approved: {status}</ul>
                          <ul>Sent:{status}</ul>
                        </li>
                      </StepLabel>
                    </Step>
                </Stepper>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Sent;
