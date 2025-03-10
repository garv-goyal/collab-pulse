import React from 'react';

// Optionally reuse FeatureCard or create new cards
const FeatureCard = ({ title, description }) => {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
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

      {/* Mockup images or placeholders */}
      <div className="collaborate-images">
        <img 
          src="https://via.placeholder.com/300?text=Mockup+1" 
          alt="CollabPulse Mockup 1" 
        />
        <img 
          src="https://via.placeholder.com/300?text=Mockup+2" 
          alt="CollabPulse Mockup 2" 
        />
      </div>

      {/* Additional feature cards for communication & insights */}
      <div className="collaborate-features">
        <FeatureCard
          title="Communication Sentiment"
          description="Analyze team chat and forum messages to detect sentiment trends, flagging potential conflicts or disengagement early on."
        />
        <FeatureCard
          title="Actionable Insights"
          description="Receive proactive suggestions, such as scheduling team check-ins or redistributing tasks, to improve collaboration."
        />
      </div>
    </section>
  );
};

export default CollaborateSection;
