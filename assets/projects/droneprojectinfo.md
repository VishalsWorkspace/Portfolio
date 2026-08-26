# 🚁 AI Autonomous Defence Framework (AIDF)

An AI-powered autonomous drone surveillance framework built using **AirSim**, **YOLOv8**, **PyTorch**, and **Streamlit** for real-time military surveillance, threat detection, and autonomous decision-making.

The system simulates an intelligent reconnaissance drone capable of detecting hostile targets, analyzing threats, tracking objects, and displaying mission intelligence through a live command dashboard.

---

# 📌 Project Overview

This project was developed as a Final Year AI Engineering project.

The framework integrates:

- Autonomous Drone Control
- Computer Vision
- Artificial Intelligence
- Real-Time Threat Analysis
- Tactical Decision Engine
- AirSim Drone Simulation
- Live Command Dashboard

The goal is to simulate an AI-powered surveillance drone capable of monitoring hostile environments without human intervention.

---

# ✨ Features

### 🎯 AI Detection

- Person Detection (YOLOv8)
- Weapon Detection
- Multi-object Tracking
- Real-time Inference
- GPU Acceleration (CUDA)

---

### 🛰 Drone Intelligence

- Autonomous Patrol
- Live Drone Telemetry
- Threat Assessment
- Target Tracking
- Mission Logging
- AirSim Integration

---

### 🛡 Threat Analysis

The AI analyzes every detected target and generates threat levels based on multiple factors.

Threat Levels:

- Low
- Medium
- High
- Critical

---

### 📊 Live Dashboard

Built using Streamlit.

Displays:

- Live Camera Feed
- Threat History
- Drone Status
- Mission Logs
- AI Decisions
- Telemetry
- FPS Monitoring

---

# 🏗 System Architecture

```
                    AirSim Simulator
                           │
                           ▼
                 Drone Camera Feed
                           │
                           ▼
                    YOLOv8 Detection
                 Person + Weapon Models
                           │
                           ▼
                   Object Tracking
                           │
                           ▼
                  Threat Analysis Engine
                           │
                           ▼
                  Tactical Decision Engine
                           │
                           ▼
                Autonomous Drone Response
                           │
                           ▼
                 Streamlit Dashboard
```

---

# 🛠 Tech Stack

## Programming

- Python 3.10

## AI / Deep Learning

- PyTorch
- Ultralytics YOLOv8
- CUDA

## Computer Vision

- OpenCV

## Simulation

- Microsoft AirSim
- Unreal Engine

## Dashboard

- Streamlit

---

# 📁 Project Structure

```
aidf-drone-framework/

│
├── src/
│   ├── airsim_bridge.py
│   ├── autonomous_drone_controller.py
│   ├── detector.py
│   ├── tracker.py
│   ├── threat_analysis.py
│   ├── decision_engine.py
│   ├── smart_cam_fused.py
│   ├── logger.py
│
├── models/
│   ├── person_v12/
│   ├── weapon_v1/
│
├── assets/
├── configs/
├── dashboard.py
├── requirements.txt
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone <your-repository-url>
cd aidf-drone-framework
```

Create virtual environment

```bash
python3.10 -m venv .venv
```

Activate

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

# ▶ Running the Project

## Terminal 1

Launch AirSim

```bash
cd ~/airsim/LinuxBlocks1.8.1/LinuxNoEditor
./Blocks.sh
```

---

## Terminal 2

Run AI Detection

```bash
cd ~/aidf-drone-framework/src
source ../.venv/bin/activate

python smart_cam_fused.py
```

---

## Terminal 3

Run Dashboard

```bash
cd ~/aidf-drone-framework

source .venv/bin/activate

streamlit run dashboard.py
```

---

## Terminal 4

Run Autonomous Controller

```bash
cd ~/aidf-drone-framework/src

source ../.venv/bin/activate

python autonomous_drone_controller.py
```

---

# 🖥 Requirements

- Ubuntu 22.04
- Python 3.10
- NVIDIA GPU (CUDA Recommended)
- AirSim 1.8.1
- Unreal Engine Environment

---

# 🚀 Future Improvements

- Military Battlefield Environment
- Vehicle Detection
- Tank Detection
- Radar Detection
- Multi-Drone Coordination
- Mission Planning
- Automatic Target Prioritization
- Drone Swarm Intelligence


---

# 👨‍💻 Screenshots


<img width="1709" height="956" alt="Screenshot from 2026-07-16 15-18-33" src="https://github.com/user-attachments/assets/41b17685-032d-4d68-bcce-275f8cac21ff" />
<img width="1709" height="956" alt="Screenshot from 2026-07-16 15-27-32" src="https://github.com/user-attachments/assets/4b7d832c-c5ca-4901-ae8a-0b9445edbad0" />
<img width="1847" height="1052" alt="Screenshot from 2026-07-16 15-28-46" src="https://github.com/user-attachments/assets/1343dbd2-da1b-4f8b-bdf1-311f488977ee" />
<img width="1727" height="940" alt="Screenshot from 2026-07-16 15-33-08" src="https://github.com/user-attachments/assets/ba089770-847f-4796-89fb-ed50eaebcfc4" />
<img width="1220" height="385" alt="Screenshot from 2026-07-16 15-33-50" src="https://github.com/user-attachments/assets/72d25158-9b71-4088-ae9e-8d5c5ac18e4b" />
<img width="473" height="538" alt="Screenshot from 2026-07-16 15-33-33" src="https://github.com/user-attachments/assets/f76b4f95-b629-4c4d-a770-e3b409140784" />



---

# 👨‍💻 Author

**Vishal Singh**

AI Engineer | Computer Vision | Machine Learning | Autonomous Systems

---

# 📄 License

Copyright © 2026 Vishal Singh

This project is shared for academic demonstration and evaluation.

Commercial use, redistribution, or modification without written permission is prohibited.
