
# AutoMind AI  
## Agentic AI Platform for Predictive Vehicle Maintenance and Manufacturing Intelligence

AutoMind AI is a secure, agentic artificial intelligence platform designed to predict vehicle failures before they occur, autonomously coordinate maintenance actions, and deliver structured feedback to manufacturing teams. The system leverages a multi-agent architecture, real-time data processing, and anomaly detection models to demonstrate next-generation automotive predictive maintenance workflows.

This project is developed for **EY Techathon 6.0 – Challenge 3 (Automotive Predictive Maintenance)**.

---

## Problem Overview

Modern vehicles generate continuous streams of telemetry data across multiple subsystems (engine, battery, vibration, temperature, RPM). Traditional maintenance approaches are reactive, leading to unexpected failures, increased downtime, and limited feedback into manufacturing design decisions.

Key challenges addressed:
- Late detection of mechanical failures  
- Manual and fragmented service scheduling  
- Lack of closed-loop feedback from field failures to manufacturing  
- Absence of security and monitoring for autonomous AI systems  

---

## Solution Overview

AutoMind AI introduces an **agentic AI architecture** where multiple specialized AI agents collaborate autonomously to monitor vehicle health, diagnose faults, interact with customers, schedule service actions, and aggregate manufacturing insights.

Each vehicle is represented as a **Digital Twin**, continuously updated using simulated sensor data. All AI activity is monitored by a **UEBA (User and Entity Behavior Analytics) agent** to ensure secure and compliant autonomous behavior.

---

## System Architecture

### Data Flow

Simulated Vehicle Sensors  
→ FastAPI Data Ingestion Layer  
→ Agentic AI Orchestrator (Microsoft Autogen)  
→ Persistent Storage (PostgreSQL / MongoDB)  
→ Real-time React Dashboard (WebSocket updates)

---

## Agentic AI Architecture

### Master Agent
- Central orchestrator coordinating all AI agents  
- Maintains task context and execution flow  
- Routes events across agents based on triggers  
- Logs all actions to the UEBA monitoring layer  

### Worker Agents

| Agent | Responsibility | Trigger |
|------|---------------|--------|
| Data Analysis Agent | Detects anomalies using Isolation Forest | New sensor data |
| Diagnosis Agent | Identifies fault type and severity | Anomaly detected |
| Customer Engagement Agent | Communicates recommended actions | Diagnosis complete |
| Scheduling Agent | Books service slots via mock API | Customer confirmation |
| Feedback Agent | Collects post-service feedback | Service completed |
| Manufacturing Insights Agent | Generates RCA/CAPA insights | Aggregated faults |
| UEBA Agent | Monitors AI behavior and anomalies | Continuous |

---

## Machine Learning Core

### Anomaly Detection
- Algorithm: Isolation Forest  
- Library: scikit-learn  
- Purpose: Early detection of abnormal sensor behavior  
- Input Features: Engine temperature, RPM, vibration, oil pressure, battery voltage  

### Optional Extension
- LSTM Autoencoder for time-series forecasting on selected vehicles  

---

## Data Simulation

- Simulates multiple vehicles emitting sensor data at fixed intervals  
- Python-based data generator streams telemetry to FastAPI endpoints  
- Enables repeatable and controlled testing of AI workflows  

---

## Frontend Dashboard

The React-based dashboard provides:
- Digital Twin vehicle health cards (status indicators)  
- Real-time sensor visualization  
- AI agent conversation and decision logs  
- Autonomous service scheduling interface  
- UEBA security alerts and anomaly logs  
- Manufacturing feedback analytics  

---

## Technology Stack

### Backend
- FastAPI  
- Uvicorn  
- WebSockets  

### AI and ML
- Microsoft Autogen  
- scikit-learn  
- Python  

### Database
- PostgreSQL / MongoDB  

### Frontend
- React  
- Vite  
- Tailwind CSS  
- ShadCN UI  

---

## Project Setup

### Prerequisites
- Python 3.9+  
- Node.js 18+  
- npm  
- Git  

---

### Backend Setup

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn backend.app.main:app --reload --host 0.0.0.0 --port 8000
````

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Security and Compliance

* UEBA agent monitors all autonomous AI actions
* Detects abnormal agent behavior and unauthorized operations
* Ensures traceability and explainability of AI decisions

---

## Contributors

* Mrigank Singh
* Ritika Jain
* Narendra Singh
* Sarthak
* Pragyan

---


