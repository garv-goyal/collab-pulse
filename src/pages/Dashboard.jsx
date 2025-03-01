import React from 'react'
// Optional: Example icons from Lucide (uncomment if you install lucide-react)
// import { Smile, Bell } from 'lucide-react'

import CollabScore from '../components/CollabScore'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* HEADER */}
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Monitor your team's collaboration health in real time.</p>
      </header>

      {/* COLLABORATION SCORE */}
      <section className="dashboard-section score-section">
        <CollabScore />
      </section>

      {/* TEAM ACTIVITY */}
      <section className="dashboard-section activity-section">
        <h3>Team Activity</h3>
        <div className="activity-cards">
          <div className="activity-card">
            <h4>Commits</h4>
            <p>125 commits today</p>
          </div>
          <div className="activity-card">
            <h4>Pull Requests</h4>
            <p>18 merged</p>
          </div>
          <div className="activity-card">
            <h4>Issue Discussions</h4>
            <p>24 active threads</p>
          </div>
        </div>
      </section>

      {/* TASK TIMELINE */}
      <section className="dashboard-section timeline-section">
        <h3>Task Timeline</h3>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-date">09:00 AM</span>
            <span className="timeline-desc">Code commit by Alice</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">10:30 AM</span>
            <span className="timeline-desc">PR merged by Bob</span>
          </div>
          <div className="timeline-item">
            <span className="timeline-date">11:15 AM</span>
            <span className="timeline-desc">Issue discussion by Carol</span>
          </div>
        </div>
      </section>

      {/* SENTIMENT ANALYSIS */}
      <section className="dashboard-section sentiment-section">
        {/* Uncomment icon usage if you installed lucide-react:
            <h3><Smile size={20} /> Sentiment Analysis</h3> */}
        <h3>Sentiment Analysis</h3>
        <div className="sentiment-cards">
          <div className="sentiment-card">
            <h4>Positive</h4>
            <p>70%</p>
          </div>
          <div className="sentiment-card">
            <h4>Neutral</h4>
            <p>20%</p>
          </div>
          <div className="sentiment-card">
            <h4>Negative</h4>
            <p>10%</p>
          </div>
        </div>
      </section>

      {/* NOTIFICATIONS */}
      <section className="dashboard-section notifications-section">
        {/* Uncomment icon usage if you installed lucide-react:
            <h3><Bell size={20} /> Notifications</h3> */}
        <h3>Notifications</h3>
        <ul className="notifications-list">
          <li>Code review requested by Alice</li>
          <li>Bob merged PR #42</li>
          <li>Carol opened issue #56</li>
        </ul>
      </section>
    </div>
  )
}

export default Dashboard
