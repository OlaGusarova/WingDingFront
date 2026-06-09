'use client';

//import { LoginForm } from '@/features/auth/ui/LoginForm'
import { useRequireAuth } from '@/shared/lib/hooks/useRequireAuth'
import UserProfile from '@/widgets/userProfile'

export default function ProfilePage() {
  const { user } = useRequireAuth({ redirectTo: '/' });
  console.log({ user })

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      <UserProfile />      
    </main>
  )
}