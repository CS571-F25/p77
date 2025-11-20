
import { HashRouter, Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'

function PlaceholderPage({title}) {
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>This page is not implemented yet</p>
    </div>
  )
}

function App() {

  return <HashRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="search" element={<PlaceholderPage title="Search Results"/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category/:slug" element={<PlaceholderPage title="Category Page"/>}/>
        <Route path="/product/:id" element={<PlaceholderPage title="Product Details"/>}/>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
