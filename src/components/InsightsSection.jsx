import React from 'react';
import { faChartLine, faArrowTrendUp, faBell } from '@fortawesome/free-solid-svg-icons';
import FeatureCard from './FeatureCard';

const InsightsSection = () => {
  return (
    <section 
      className="insights-section" 
      id="insights" 
      style={{ padding: '3rem 2rem', color: '#fff' }}
    >
      <h2 
        className="insights-title" 
        style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem' }}
      >
        Insights When You Need Them, Wherever You Are
      </h2>
      <p 
        className="insights-subtitle" 
        style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', color: '#ccc' }}
      >
        Access real-time analytics and performance metrics with our dynamic dashboard. 
        Stay informed and make data-driven decisions from any location.
      </p>
      <div 
        className="features-grid" 
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}
      >
        <FeatureCard
          icon={faChartLine}
          title="Activity Analysis"
          description="Monitor code commits, pull requests, and issue discussions."
          detailedDescription="Track code commits, pull requests, and issue discussions in depth with interactive charts that highlight participation trends and pinpoint areas for improvement."
        />
        <FeatureCard
          icon={faArrowTrendUp}
          title="Task Progress"
          description="Visualize project timelines."
          detailedDescription="Explore project timelines with dynamic, interactive graphs that display task progress and identify bottlenecks, helping teams stay on track."
        />
        <FeatureCard
          icon={faBell}
          title="Notifications"
          description="Receive collaboration alerts."
          detailedDescription="Stay on top of your team's performance with timely notifications. Detailed alert logs help you monitor issues and take corrective actions promptly."
        />
      </div>
    </section>
  );
};

export default InsightsSection;
