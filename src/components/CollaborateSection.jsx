import React from 'react';
import { faMessage, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import FeatureCard from './FeatureCard';

const CollaborateSection = () => {
  return (
    <section 
      className="collaborate-section" 
      id="collaborate" 
      style={{ padding: '3rem 2rem', color: '#fff' }}
    >
      <h2 
        className="collaborate-title" 
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Collaborate Seamlessly, No Matter the Team Size
      </h2>
      <p 
        className="collaborate-subtitle" 
        style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#ccc' }}
      >
        Experience unified communication and smooth task management that brings everyone together. 
        Our platform scales effortlessly, supporting teams of every size.
      </p>
      <div 
        className="collaborate-features" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}
      >
        <FeatureCard
          icon={faMessage}
          title="Communication Sentiment"
          description="Analyze chat and forum messages."
          detailedDescription="Leverage natural language processing to analyze team chat and forum messages. Detailed sentiment analysis highlights emotional trends and flags potential conflicts early."
        />
        <FeatureCard
          icon={faLightbulb}
          title="Actionable Insights"
          description="Receive proactive suggestions."
          detailedDescription="Get tailored recommendations based on comprehensive data analysis. Detailed insights suggest scheduling check-ins, rebalancing tasks, and optimizing workflows to enhance team collaboration."
        />
      </div>
    </section>
  );
};

export default CollaborateSection;
