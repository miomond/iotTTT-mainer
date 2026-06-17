# 🏡 React IoT Smart Home Dashboard 🚀

Welcome to the **React IoT Smart Home Dashboard**! This Single Page Application (SPA) is designed to give you seamless, real-time control over your smart home devices right from your browser. Built with **React, Vite, and Bootstrap**, this dashboard offers an intuitive and responsive user interface to monitor sensors and control appliances with a single click. ✨

---

## 🌟 Features

Our smart dashboard brings your home to life:
- **🌡️ Climate Monitoring**: Visualize real-time temperature and humidity using interactive Doughnut charts (Chart.js).
- **💡 Smart Lighting**: Toggle inside and outside lights effortlessly. Includes an "All ON/OFF" master switch!
- **🚨 Security & Safety**: 
  - Intruder detection via PIR sensors 🥷
  - Fire and smoke alarms via Flame sensors 🔥
- **🚗 Garage Management**: Monitor your garage door and get proximity alerts for parking via Ultrasonic sensors.
- **🌱 Smart Gardening**: Keep track of your plant's soil moisture so you always know when to water them! 💧
- **🌬️ Appliance Control**: Turn your smart fans and doors on or off remotely.
- **📝 Blog & Community**: Includes a fully-featured blogging section, user authentication, and profile management.

---

## 🔌 How it Works: WebSockets & MQTT

To achieve real-time bi-directional communication between your browser and the physical hardware (like ESP32 or NodeMCU), this project uses a powerful combination of **Socket.IO** and **MQTT**.

### 1. 📡 The Connection
The React app uses `socket.io-client` to establish a persistent WebSocket connection to a Node.js backend server (usually running on port `8001`). This backend acts as a bridge between the WebSockets and the MQTT Broker.

### 2. 📥 Receiving Sensor Data (Subscribing)
When the dashboard loads, it asks the backend to subscribe to specific MQTT topics:
```javascript
socket.emit('subscribe', { 'topic': "data" })      // Temperature & Humidity
socket.emit('subscribe', { 'topic': "ultra" })     // Parking Distance
socket.emit('subscribe', { 'topic': "pir" })       // Intruder Detection
socket.emit('subscribe', { 'topic': "flame" })     // Fire/Smoke Detection
socket.emit('subscribe', { 'topic': "soilmois" })  // Plant Moisture

```

Once subscribed, the app listens continuously. When a physical sensor publishes new data to the MQTT broker, the backend forwards it to the React app via the WebSocket mqtt event:

javascript


socket.on('mqtt', function(data) {
  // Parses the incoming payload and updates the UI state in real-time!
});
3. 📤 Sending Orders to Devices (Publishing)
When you toggle a switch on the UI (like turning on a light), the app emits a publish event via Socket.IO:

javascript


socket.emit('publish', { 'topic': "LED1", 'payload': "LED1 ON" });
The backend takes this message and publishes it directly to the MQTT broker. The physical smart device listening to the LED1 topic receives the payload and physically turns the light on! 💡

(Note: Ensure your Socket.IO connection strings and event listeners in Dashboard.jsx are uncommented for live production).

🛠️ Running the Project Locally
Getting this Vite + Bootstrap environment up and running is super fast and easy! Just follow these steps:

Prerequisites
Make sure you have Node.js installed on your machine.

Step-by-Step Instructions
1. Clone the repository and navigate to the project directory:

bash


git clone <your-repo-url>
cd iotTTT-mainer-main
2. Install Dependencies: We need to download all the required packages (React, Vite, Bootstrap, Socket.IO, Chart.js, etc.). Run:

bash


npm install
(Bootstrap is already integrated globally in App.jsx, so npm install handles the setup automatically).

3. Start the Development Server: Fire up the lightning-fast Vite build tool:

bash


npm run dev
4. View the App: Open your browser and navigate to the URL provided in your terminal (usually http://localhost:5173).

🧩 Built With
React 18 - Core frontend framework
Vite - Next Generation Frontend Tooling
Bootstrap 5 - CSS Framework for responsive layouts
Socket.IO Client - Real-time event-based communication
Chart.js & React-Chartjs-2 - Data visualization
Happy Automating! 🚀🤖
