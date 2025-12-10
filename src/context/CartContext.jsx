import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null)
const CART_KEY = "the-shop-cart"

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // persist cart on change
  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartItems))
    } catch {
      // fail silently
    }
  }, [cartItems])

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity
        }
      ]
    })
  }

  const updateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev
        .map(i => i.id === id ? { ...i, quantity } : i)
        .filter(i => i.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id))
  }

  const clearCart = () => setCartItems([])

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx
}
