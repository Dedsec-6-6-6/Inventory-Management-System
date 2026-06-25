# 📦 Inventory Management System

A full-stack Inventory Management System built using **React**, **ASP.NET Core Web API**, **Entity Framework Core**, and **SQL Server**.

This application allows users to manage inventory efficiently by performing CRUD operations, tracking stock levels, searching products, and viewing inventory statistics through a clean and responsive interface.

---

## 🚀 Features

### Product Management

* Add new products
* Edit existing products
* Delete products
* View all products

### Inventory Dashboard

* Total Products
* Total Quantity in Stock
* Low Stock Alerts

### Search & Filtering

* Search products by name
* Search products by category

### User Experience

* Loading spinner while fetching data
* Toast notifications for actions
* Responsive Bootstrap UI
* Stock status indicators
* Category badges
* Currency formatting (INR)

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* Axios
* Bootstrap 5
* React Toastify
* Bootstrap Icons

### Backend

* ASP.NET Core Web API
* Entity Framework Core
* SQL Server

### Development Tools

* Visual Studio
* VS Code
* Swagger UI
* Git & GitHub

---

## 🏗 Architecture

```text
React Frontend
      │
      ▼
Axios HTTP Requests
      │
      ▼
ASP.NET Core Web API
      │
      ▼
Entity Framework Core
      │
      ▼
SQL Server Database
```

---

## 📋 API Endpoints

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | /api/Products      | Get all products  |
| GET    | /api/Products/{id} | Get product by id |
| POST   | /api/Products      | Create product    |
| PUT    | /api/Products/{id} | Update product    |
| DELETE | /api/Products/{id} | Delete product    |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/inventory-management-system.git
```

### Backend Setup

```bash
cd InventoryAPI

dotnet restore

dotnet ef database update

dotnet run
```

Backend runs on:

```text
https://localhost:7235
```

---

### Frontend Setup

```bash
cd inventory-ui

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📸 Screenshots

### Dashboard

(Add dashboard screenshot here)

### Product List

(Add product list screenshot here)

### Add Product

(Add add-product screenshot here)

### Edit Product

(Add edit-product screenshot here)

---

## 🎯 Key Concepts Demonstrated

* React Hooks (`useState`, `useEffect`)
* Component-Based Architecture
* RESTful APIs
* CRUD Operations
* Axios API Integration
* Entity Framework Core
* SQL Server Integration
* Dependency Injection
* CORS Configuration
* Responsive Design

---

## 🎤 Interview Talking Points

This project demonstrates:

* Full-stack application development
* React frontend development
* ASP.NET Core Web API development
* Database design and integration
* API consumption using Axios
* State management using React Hooks
* Responsive UI design using Bootstrap

---

## 👨‍💻 Author

**Sayyed Faiz**

GitHub: https://github.com/YOUR_USERNAME

---

## 📄 License

This project is created for learning, portfolio, and interview demonstration purposes.
