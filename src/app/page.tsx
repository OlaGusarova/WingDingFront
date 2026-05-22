'use client';

//import { LoginForm } from '@/features/auth/ui/LoginForm';
import { useAppSelector } from '@/app/store/hooks';
import { useGetUserQuery, selectUser } from '@/entities/user';

export default function HomePage() {
  const currentUser = useAppSelector(selectUser)
  // const { data: userDetails, isLoading } = useGetUserQuery(currentUser?.id || 0, {
  //   skip: !currentUser?.id,
  // });
  const { data: userDetails, isLoading, error } = useGetUserQuery('d5e5cc54-8ac0-4c4c-91b6-e5e08f500e88')
  console.log({ userDetails, error })

  if (!currentUser) {
    return (
      <main className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Добро пожаловать</h1>
        <div className="max-w-md mx-auto">
          {/* <LoginForm /> */}
          Please login
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Личный кабинет</h1>
      
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Привет, {userDetails?.name}
          </h2>
          <p>Email:</p>
        </div>
      )}
    </main>
  );
}