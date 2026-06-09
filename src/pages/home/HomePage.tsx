import Image from 'next/image'
import { EventsSection } from '@/features'
import { getEvents } from '@/pages/home/api/getEvents'


export default async function HomePage() {
  const events = await getEvents();
  return (
    <>
      <Image
        src="/images/mainBan.png" // 👈 Прямой путь от корня проекта
        alt="баннер"
        width={1152}
        height={400}
        className='rounded-4xl'
      />
      <EventsSection events={events} />
    </>
  );
};