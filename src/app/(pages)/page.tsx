import HomePage from '@/pages/home/HomePage';

export const metadata = {
  title: 'EventHub - Все события в одном месте',
  description:
    'Билеты на концерты, выставки, спортивные мероприятия. Лучшие события города.',
  keywords: 'события, билеты, концерты, выставки, спорт',
};

export default async function Home() {
  return <HomePage />;
}
