import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function AdminPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== "admin") {
    return <div className="text-center p-10">Access Denied</div>
  }

  return <div className="text-center p-10">Welcome, Admin 👋</div>
}
