# 🏠 Rest | Rent

**Residence Reservation Website for KMUTT Students**

Rest | Rent is a web application built to solve the pain points of KMUTT students searching for suitable accommodations. As students ourselves, we understand the difficulties of finding the right residence — in terms of lifestyle, location, rental fees, facilities, and comfort — often requiring physically exploring various areas.

This project was created to simplify that experience.

---

## ✨ Features

- 📋 View detailed residence information (including available rooms)
- 🧾 Online booking system
- 🔄 Always up-to-date residence listings
- 🔍 User-friendly interface for discovering suitable housing

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/CSC105-2024/G07-FullStuck.git

# Navigate into the project folder
cd G07-FullStuck

# Install dependencies
npm install

# Start the development server
npm run dev

Tech Stack
Frontend: React.js, Tailwind CSS

Form Handling: React Hook Form + Zod

HTTP Client: Axios

Backend: Hono 

About the Project
The Residence Reservation Website for KMUTT students is a project designed to address the challenges students face when searching for suitable housing. We understand that students seek residences that align with their lifestyles, preferred locations, rental fees, facilities, and comfort levels. This need motivated us to create this website.

Our website offers essential features that allow users to find detailed information about available residences, including basic information and the number of rooms for rent. We also provide an online booking option for those who prefer to reserve their accommodations digitally. Additionally, a unique aspect of our service is that we ensure our residence listings are regularly updated, allowing users to rely on our website for accurate and current information.

## 📡 API Endpoints

### 👤 User API

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/users`         | Create a new user       |
| PATCH  | `/users/:id`     | Update user by ID       |
| DELETE | `/users/:id`     | Delete user by ID       |
| GET    | `/users/:id`     | Get user by ID          |

---

### 🔐 Auth API

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/auth/login`    | Login with user account |

---

### 🏘️ Resident API

| Method | Endpoint                          | Description                                                     |
|--------|-----------------------------------|-----------------------------------------------------------------|
| GET    | `/residents`                      | Get all residents                                               |
| GET    | `/resident/card/condo`            | Get all condos (card view: name, address, price, unit type)    |
| GET    | `/resident/card/apartment`        | Get all apartments (card view: name, address, price, unit type)|
| GET    | `/residents/with-rating`          | Get residents with ratings                                      |
| POST   | `/residents`                      | Create a new residence                                          |
| PATCH  | `/residents/:id`                  | Update residence by ID                                          |
| DELETE | `/residents/:id`                  | Delete residence by ID                                          |
| GET    | `/residents/:id`                  | Get residence by ID                                             |

---

### 📅 Booking API

| Method | Endpoint                          | Description                             |
|--------|-----------------------------------|-----------------------------------------|
| GET    | `/bookings`                       | Get all bookings                        |
| POST   | `/bookings`                       | Create a new booking                    |
| GET    | `/bookings/:id`                   | Get booking by ID                       |
| PATCH  | `/bookings/:id`                   | Update booking by ID                    |
| DELETE | `/bookings/:id`                   | Delete booking by ID                    |
| GET    | `/bookings/user/:userId`          | Get bookings by user ID                 |
| GET    | `/bookings/resident/:residentId`  | Get bookings by resident ID             |

---

### ✍️ Review API

All review-related endpoints start with `/reviews`

| Method | Endpoint                         | Description                            |
|--------|----------------------------------|----------------------------------------|
| GET    | `/reviews`                       | Get all reviews                        |
| POST   | `/reviews`                       | Create a new review                    |
| GET    | `/reviews/:id`                   | Get review by ID                       |
| PATCH  | `/reviews/:id`                   | Update review by ID                    |
| DELETE | `/reviews/:id`                   | Delete review by ID                    |
| GET    | `/reviews/user/:userId`          | Get reviews by user ID                 |
| GET    | `/reviews/resident/:residentId`  | Get reviews by resident ID             |
| GET    | `/reviews/rating/:residentId`    | Get average rating for a residence     |

---

### 🔎 Search API

| Method | Endpoint       | Description                          |
|--------|----------------|--------------------------------------|
| GET    | `/search`      | Search residence by name (query param: `name`) |

---

