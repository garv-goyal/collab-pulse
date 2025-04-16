# CollabPulse

CollabPulse is a web-based team collaboration health monitor that integrates with popular tools such as GitHub, Slack, Notion, and Bitbucket. It provides real-time insights into project dynamics and team performance, enabling teams to track activity, analyze communication sentiment, and receive actionable recommendations to optimize their workflows.

--- 

## Features

- **Activity Analysis:**  
  View interactive charts and graphs showing commit trends, pull request activity, and issue tracking data from GitHub.
- **Task Progress:**  
  Visualize project timelines with dynamic, interactive Gantt charts that reveal bottlenecks and delays.
- **Notifications:**  
  Receive real-time alerts when key performance metrics drop below thresholds.
- **Communication Sentiment:**  
  Analyze team chat and forum messages to detect sentiment trends and flag potential conflicts.
- **Actionable Insights:**  
  Get recommendations to optimize workflows and boost team productivity.
- **Customizable Onboarding:**  
  Complete a tailored survey during signup to customize the platform experience.
- **Tool Integrations:**  
  Connect your GitHub, Slack, Notion, and Bitbucket accounts to seamlessly sync your team’s data and monitor performance.

## Tech Stack

- **Frontend:**  
  - React (with Vite)
  - React Router
  - Styled Components
  - FontAwesome Icons
- **Backend:**  
  - Node.js
  - Express
  - MongoDB (MongoDB Atlas in production)
  - JSON Web Tokens (JWT) for authentication
  - OAuth integration with Google (for login)
- **Deployment:**  
  - Frontend deployed on Vercel
  - Backend deployed on AWS Elastic Beanstalk

## Demo

Visit the live demo at:  
[https://collab-pulse.vercel.app](https://collab-pulse.vercel.app)
