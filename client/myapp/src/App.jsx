import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import CartPage from './pages/cartPage'
import CheckoutPage from './pages/checkoutPage'
import OrderPage from './pages/OrdersPage'
import Layout from './pages/layout'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path={''} element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path={'cart'} element={<CartPage />} />
            <Route path={'checkout'} element={<CheckoutPage />} />
            <Route path={'orders'} element={<OrderPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
