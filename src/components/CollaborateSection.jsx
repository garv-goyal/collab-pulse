import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faLightbulb, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-card-header">
        <FontAwesomeIcon icon={icon} className="feature-icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <FontAwesomeIcon icon={faArrowRight} className="feature-arrow" />
    </div>
  );
};

const CollaborateSection = () => {
  return (
    <section className="collaborate-section" id="collaborate">
      <h2 className="collaborate-title">Collaborate Seamlessly, No Matter the Team Size</h2>
      <p className="collaborate-subtitle">
        Experience unified communication and smooth task management that brings everyone together. 
        Our platform scales effortlessly, supporting teams of every size.
      </p>

      <div className="collaborate-features">
        <FeatureCard
          icon={faMessage}
          title="Communication Sentiment"
          description="Analyze team chat and forum messages to detect sentiment trends, flagging potential conflicts or disengagement early on."
        />
        <FeatureCard
          icon={faLightbulb}
          title="Actionable Insights"
          description="Receive proactive suggestions, such as scheduling team check-ins or redistributing tasks, to improve collaboration."
        />
      </div>
    </section>
  );
};

export default CollaborateSection;
