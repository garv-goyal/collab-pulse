import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faPlug, 
  faDatabase, 
  faRobot, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: faUserPlus,
      title: "Sign Up & Onboard",
      description: "Create your account and complete a brief onboarding process to set up your team and preferences."
    },
    {
      id: 2,
      icon: faPlug,
      title: "Integrate Your Tools",
      description: "Easily connect GitHub, Slack, and other project management apps to start gathering real-time data."
    },
    {
      id: 3,
      icon: faDatabase,
      title: "Aggregate Data",
      description: "We consolidate your team’s data from various platforms into one centralized dashboard."
    },
    {
      id: 4,
      icon: faRobot,
      title: "Automated Analysis",
      description: "Our smart algorithms process your data and identify key performance metrics and trends."
    },
    {
      id: 5,
      icon: faCheckCircle,
      title: "Get Actionable Insights",
      description: "Receive clear, actionable recommendations to boost collaboration and streamline your workflows."
    }
  ];

  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <section style={{ backgroundColor: "#1a1a1a", padding: "3rem 2rem" }}>
      <h2 style={{ 
            fontSize: "2.2rem", 
            marginBottom: "2rem", 
            textAlign: "center", 
            color: "#fff" 
          }}>
        How it Works
      </h2>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {steps.map((step) => (
          <div 
            key={step.id}
            style={{
              backgroundColor: "#2a2a2a",
              borderRadius: "8px",
              marginBottom: "1rem",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
            }}
          >
            <div
              onClick={() => toggleStep(step.id)}
              style={{
                cursor: "pointer",
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#333",
                transition: "background-color 0.3s ease"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <FontAwesomeIcon icon={step.icon} style={{ fontSize: "1.8rem", color: "#fff" }} />
                <h3 style={{ color: "#fff", margin: 0 }}>{step.title}</h3>
              </div>
              <div style={{ color: "#fff", fontSize: "1.5rem" }}>
                {activeStep === step.id ? "-" : "+"}
              </div>
            </div>
            <div
              style={{
                maxHeight: activeStep === step.id ? "150px" : "0px",
                transition: "max-height 0.4s ease, padding 0.4s ease",
                overflow: "hidden",
                padding: activeStep === step.id ? "1rem" : "0 1rem",
                backgroundColor: "#2a2a2a",
                color: "#ccc"
              }}
            >
              <p style={{ margin: 0 }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;