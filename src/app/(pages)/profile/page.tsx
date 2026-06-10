'use client';

//import { LoginForm } from '@/features/auth/ui/LoginForm'
import { useRequireAuth } from '@/shared/lib/hooks/useRequireAuth'
import UserProfile from '@/widgets/userProfile'
import EventCalendar from '@/widgets/calendar/ui/EventCalendar'
import { events } from '@/widgets/calendar/ui/constants'

export default function ProfilePage() {
  const { user } = useRequireAuth({ redirectTo: '/' })
  console.log({ user })

  return (
    <main className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      <div className='flex gap-4 w-full'>
        <UserProfile />  
        <EventCalendar events={events} />
      </div>    
    </main>
  )
}