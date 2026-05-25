import { HomePage } from '@/pages/home/HomePage';
import { getEvents } from '@/pages/home/api/getEvents';

export const metadata = {
  title: 'EventHub - Все события в одном месте',
  description: 'Билеты на концерты, выставки, спортивные мероприятия. Лучшие события города.',
  keywords: 'события, билеты, концерты, выставки, спорт',
};

export default async function Home() {

  const events = await getEvents();
  
  return <HomePage initialEvents={events} />;
}