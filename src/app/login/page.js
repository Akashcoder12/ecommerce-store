"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (!res.error) {
      router.push("/admin")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="w-96 p-6 bg-white rounded shadow" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <input
          type="text"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 w-full">Login</button>
      </form>
    </div>
  )
}
