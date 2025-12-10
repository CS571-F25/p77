// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { hashStringSHA256 } from "../utils/hash";

const AuthContext = createContext(null);

// keys in localStorage
const USERS_KEY = "the_shop_users"  // { email: hashedPassword, ... }
const CURRENT_USER_KEY = "the_shop_current_user"

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // load current user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY)
    if (storedUser) {
      setUser(storedUser)
    }
  }, [])

  const register = async (email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "{}");
    if (users[email]) {
      throw new Error("An account with this email already exists.");
    }

    const hash = await hashStringSHA256(password)
    users[email] = hash
    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    localStorage.setItem(CURRENT_USER_KEY, email)
    setUser(email)
  }

  const signIn = async (email, password) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "{}")
    const storedHash = users[email]
    if (!storedHash) {
      throw new Error("No account found with that email.")
    }

    const hash = await hashStringSHA256(password)
    if (hash !== storedHash) {
      throw new Error("Incorrect password.")
    }

    localStorage.setItem(CURRENT_USER_KEY, email)
    setUser(email)
  }

  const signOut = () => {
    localStorage.removeItem(CURRENT_USER_KEY)
    setUser(null)
  }

  const value = { user, register, signIn, signOut }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return ctx
}
