# E-Commerce Application

[Youtube Demo Link](https://youtu.be/3LQU0EhpgjY)

## Overview

A full-stack e-commerce web application built with React and Node.js that allows users to browse products, manage their shopping cart, and place orders.

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library for modern UI
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Bootstrap** - Additional styling utilities

### Backend
- **Node.js** with **Express 5** - Server framework
- **MongoDB** with **Mongoose** - Database and ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Features

- **Product Catalog** - Browse products with images, ratings, and categories
- **Shopping Cart** - Add/remove items, update quantities
- **Product Details** - View detailed product information
- **Order Management** - Track and view orders
- **Responsive Design** - Mobile-friendly interface

## Project Structure

```
├── client/myapp/          # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route-based page components
│   │   └── assets/        # Static assets
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── config/            # Database configuration
    ├── controller/        # Route controllers
    ├── models/            # Mongoose schemas
    ├── routes/            # API routes
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in server root:
```env
PORT=5000
MONGO_DB=your_mongodb_connection_string
```

4. Start the server:
```bash
node index.js
```

### Frontend Setup

1. Navigate to client directory:
```bash
cd client/myapp
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in client/myapp root:
```env
VITE_API_URL=http://localhost:5000
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product

### Cart
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process order

## Available Routes

- `/` - Home page (Product listing)
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/orders` - Order history

## Development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `node index.js` - Start server

## Models

### Product
- id, title, price, description, category, image, rating

### Cart
- User cart items with product references and quantities

### Order
- Order details and user information

### User
- User authentication data

## License

ISC
