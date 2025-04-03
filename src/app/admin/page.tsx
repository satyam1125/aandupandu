import { ContactsTable } from '@/components/admin/ContactsTable'
import { Button } from '@/components/ui/button'
import { getSession } from '../../../lib/auth'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await getSession()
  if (!session) redirect('/login')

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#00A7B5]">Contact Submissions</h1>
        <form action="/api/auth/logout" method="POST">
          <Button
            type="submit"
            variant="outline"
            className="border-[#FF8200] text-[#FF8200] hover:bg-[#FF8200]/10"
          >
            Logout
          </Button>
        </form>
      </div>
      <ContactsTable />
    </div>
  )
}