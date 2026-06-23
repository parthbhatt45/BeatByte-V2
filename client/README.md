# 🎵 BeatByte

A modern full-stack music streaming web application inspired by Spotify, built using the MERN Stack. BeatByte allows users to discover songs, search music, explore artists, manage liked songs, and enjoy a seamless music listening experience with an interactive music player.

![BeatByte Banner](https://img.shields.io/badge/MERN-Stack-green)
![React](https://img.shields.io/badge/React-19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

---

## 🚀 Features

### 🔐 Authentication System
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Persistent Login Sessions

### 🎵 Music Streaming
- Dynamic Song Fetching from MongoDB
- Play Songs
- Pause Songs
- Previous Song
- Next Song
- Auto Play Next Song
- Progress Bar
- Seek Through Song
- Volume Control
- Shuffle Mode
- Repeat Mode

### ❤️ User Library
- Like Songs
- Unlike Songs
- Liked Songs Collection
- Recently Played Songs
- Song Count Statistics

### 🎤 Artist Section
- Featured Artists
- Dynamic Artist Pages
- View Songs By Artist
- Artist Based Navigation

### 🔍 Search Functionality
- Search Songs Instantly
- Real-Time Filtering
- Dynamic Search Results

### 🎨 Modern UI
- Dark Theme
- Glassmorphism Design
- Responsive Layout
- Interactive Music Player
- Smooth User Experience
- Mobile Friendly Design

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Context API
- Axios
- React Icons
- CSS3

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Bcrypt.js

---

# 📂 Project Structure

```bash
BeatByte/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── assets/
│   │
│   └── public/
│       └── audio/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/beatbyte.git
```

```bash
cd beatbyte
```

---

## Backend Setup

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create .env file

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_ATLAS_URI

JWT_SECRET=YOUR_SECRET_KEY
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

---

# 🌐 API Endpoints

## Authentication

### Register User

```http
POST /api/users/register
```

### Login User

```http
POST /api/users/login
```

---

## Songs

### Get All Songs

```http
GET /api/songs
```

### Add Song

```http
POST /api/songs
```

---

# 🎯 Key Functionalities

## Music Player

The music player is powered using:

- React Context API
- HTML Audio API
- Dynamic Song State Management

Supports:

- Play/Pause
- Next/Previous
- Volume Control
- Repeat Mode
- Shuffle Mode
- Progress Tracking

---

## Artist Pages

Each artist has a dedicated route:

```bash
/artist/:artistName
```

Example:

```bash
/artist/Arijit Singh
```

Displays all songs belonging to the selected artist.

---

## Liked Songs System

Liked songs are stored using:

```javascript
localStorage
```

Features:

- Like Songs
- Unlike Songs
- Dynamic Updates
- Library Integration

---

# 🔮 Future Enhancements

- Playlist Creation
- Queue Management
- Song Upload Dashboard
- User Profile Statistics
- Dynamic Artist Generation
- Cloud Storage Integration
- Recommendation System

---

# 📈 Learning Outcomes

Through this project I learned:

- MERN Stack Development
- JWT Authentication
- REST API Development
- MongoDB Atlas Integration
- React Context API
- State Management
- Audio Handling in React
- Responsive UI Design
- Full Stack Application Deployment

---

# 👨‍💻 Author

### Parth Bhatt

- BTech. Information Technology
- Full Stack Web Developer
- MERN Stack Enthusiast

GitHub:
https://github.com/parthbhatt45

LinkedIn:
https://www.linkedin.com/in/parth-bhatt-aa053b292

---

# ⭐ If you like this project

Give it a star on GitHub and feel free to contribute.

Made with ❤️ using MERN Stack.