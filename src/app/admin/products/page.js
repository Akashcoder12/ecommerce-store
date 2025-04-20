import ProductForm from "@/components/ProductForm"

export default function ProductsPage() {
  const handleSave = (data) => {
    console.log("Form data:", data)
    // API call will go here
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ProductForm onSubmit={handleSave} />
    </div>
  )
}
