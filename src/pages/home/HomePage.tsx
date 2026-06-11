import { EventsSection } from '@/features';
import { getEvents } from '@/pages/home/api/getEvents';
import Banner from '@/widgets/banner';

export default async function HomePage() {
  const events = await getEvents();
  return (
    <>
      <Banner />
      <EventsSection events={events} />
    </>
  );
}
