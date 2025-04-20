import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  const products = await prisma.product.findMany({ include: { category: true } })
  return NextResponse.json(products)
}

export async function POST(req) {
  const body = await req.json()
  const { name, price, categoryId } = body

  const product = await prisma.product.create({
    data: {
      name,
      price: parseInt(price),
      categoryId: categoryId ? parseInt(categoryId) : null,
    },
  })

  return NextResponse.json(product)
}
