import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import SignUp from './pages/SignUp'
import Checkout from './pages/Checkout'
import OrderConfirmation from './pages/OrderConfirmation'
import SearchResults from './pages/SearchResults'
import CategoryPage from './pages/CategoryPage'
import ProductDetail from './pages/ProductDetail'

function PlaceholderPage({title}) {
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>This page is not implemented yet</p>
    </div>
  )
}

function App() {

  return <AuthProvider>
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home/>}/>
            <Route path="search" element={<SearchResults/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/order-confirmation" element={<OrderConfirmation />}/>
            <Route path="/category/:slug" element={<CategoryPage />}/>
            <Route path="/product/:id" element={<ProductDetail />}/>
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  </AuthProvider>
  


}

export default App
