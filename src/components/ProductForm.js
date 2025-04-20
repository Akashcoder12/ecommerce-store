"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().min(1),
  price: z.string().regex(/^\d+$/, "Must be a number"),
})

export default function ProductForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          {...register("name")}
          className="w-full border p-2"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label>Price</label>
        <input
          {...register("price")}
          className="w-full border p-2"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <button className="bg-black text-white px-4 py-2">Save</button>
    </form>
  )
}
