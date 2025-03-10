import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowTrendUp, faBell, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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

const InsightsSection = () => {
  return (
    <section className="insights-section" id="insights">
      <h2 className="insights-title">Insights When You Need Them, Wherever You Are</h2>
      <p className="insights-subtitle">
        Access real-time analytics and performance metrics with our dynamic dashboard. 
        Stay informed and make data-driven decisions from any location.
      </p>

      <div className="features-grid">
        <FeatureCard
          icon={faChartLine}
          title="Activity Analysis"
          description="Monitor code commits, pull requests, and issue discussions to keep track of project participation levels and balanced contributions."
        />
        <FeatureCard
          icon={faArrowTrendUp}
          title="Task Progress"
          description="Visualize project timelines and see when tasks are stagnating or overdue, helping teams stay on track."
        />
        <FeatureCard
          icon={faBell}
          title="Notifications"
          description="Get collaboration alerts when your team's health score dips below a threshold."
        />
      </div>
    </section>
  );
};

export default InsightsSection;
