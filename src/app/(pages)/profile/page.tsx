'use client';

//import { LoginForm } from '@/features/auth/ui/LoginForm'
import { useRouter } from 'next/navigation'
import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/entities/user'

export default function ProfilePage() {
  // const { data: userDetails, isLoading } = useGetUserQuery(currentUser?.id || 0, {
  //   skip: !currentUser?.id,
  // });
  const userDetails = useAppSelector(selectUser)
  console.log({ userDetails })

  const router = useRouter()

  if (!userDetails) router.push('/')

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
    
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Привет, {userDetails?.displayName}
        </h2>
      </div>
    </main>
  )
}